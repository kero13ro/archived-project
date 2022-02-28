"use strict";

//模擬觸發中獎
setTimeout(winAnimation("挑戰成功"), 1000);

function winAnimation(wintxt) {
  //建立 canvas node
  var canvasEl = document.createElement("canvas");
  canvasEl.id = "win_animaton";
  canvasEl.style.cssText =
    "width: 100vw; height: 100vh; background-color: rgba(0,0,0,0.9); position: absolute; top: 50%; left: 0 ; transform: translateY(-50%)";
  document.querySelector("body").appendChild(canvasEl);

  //載入資源
  var stage, canvas, stageW, stageH;
  var fontloaded, imgloaded;

  var queue = new createjs.LoadQueue(false);
  queue.installPlugin(createjs.Sound);
  queue.loadManifest(
    [
      { id: "coin1", src: "c1.png" },
      { id: "coin2", src: "c2.png" },
      { id: "coin3", src: "c3.png" },
      { id: "coin4", src: "c4.png" },
      { id: "light", src: "LIGHT_3.png" },
      { id: "mus", src: "win.mp3" },
    ],
    true,
    "scripts/styles/"
  );
  queue.on(
    "complete",
    function () {
      imgloaded = true;
      if (fontloaded && imgloaded) init(); //若已經載入圖片、字型才初始化
    },
    this
  );

  var loadfont = new createjs.FontLoader(
    {
      src: "https://fonts.googleapis.com/css2?family=Orelega+One&display=swap",
      type: "fontcss",
    },
    true
  );
  loadfont.load();
  loadfont.on("complete", function () {
    fontloaded = true;
    if (fontloaded && imgloaded) init(); //若已經載入圖片、字型才初始化
  });

  function init() {
    canvas = document.getElementById("win_animaton");
    stage = new createjs.Stage(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stageW = canvas.width;
    stageH = canvas.height;

    //金幣爆炸動畫
    var coin1 = new createjs.Bitmap(queue.getResult("coin1"));
    var coin2 = new createjs.Bitmap(queue.getResult("coin2"));
    var coin3 = new createjs.Bitmap(queue.getResult("coin3"));
    var coin_wrap = new createjs.Container();
    stage.addChild(coin_wrap);

    function coin_explode() {
      for (var i = 0; i < 300; i++) {
        var imgtype = "coin" + Math.ceil(Math.random() * 3);
        var coin = eval(imgtype).clone();
        var a = Math.PI * 2 * Math.random();
        var v = (Math.random() - 0.5) * 80; //speed
        coin.set({
          x: stageW / 2,
          y: stageH / 2,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.2 + 0.6,
          vX: Math.cos(a) * v,
          vY: Math.sin(a) * v,
        });
        coin_wrap.addChild(coin);
      }

      createjs.Ticker.on("tick", function (event) {
        var l = coin_wrap.numChildren;
        var m = event.delta / 16;
        for (var i = 0; i < l; i++) {
          var sparkle = coin_wrap.getChildAt(i);

          if (sparkle.y > canvas.height + 100 || sparkle.y < -100) {
            coin_wrap.removeChild(sparkle);
            i--;
            l--;
            continue;
          }
          sparkle.vY += 0.1 * m; //重力
          sparkle.x += sparkle.vX * m;
          sparkle.y += sparkle.vY * m;
        }
      });
    }

    //旋轉發光背景
    var light = new createjs.Bitmap(queue.getResult("light"));
    light.regX = light.getBounds().width / 2;
    light.regY = light.getBounds().height / 2;
    light.scale = 1.5;
    light.alpha = 0;
    light.x = stageW / 2;
    light.y = stageH / 2;
    stage.addChild(light);

    //獲獎文字
    var ratio = window.innerWidth / 1440;
    var fontsize = (110 * window.innerWidth) / 1440; //預設比例為 在1440為110px

    var mobileOverride = false;
    if (fontsize < 42) {
      fontsize = 42;
      mobileOverride = true;
    }

    var txtWrap = new createjs.Container();
    var txtArr = wintxt.split("").map(function (val, i) {
      //文字及外框
      var txt = new createjs.Text(
        val,
        "bold " + fontsize + "px  Microsoft JhengHei",
        "#FFD700"
      );
      var txtoutline = txt.clone();
      txtoutline.outline = 10 * ratio;
      txtoutline.color = "#cc9318";

      //字體陰影
      var txt_blur = txtoutline.clone();
      txt_blur.color = "rgba(0,0,0,0.3)";
      txt_blur.outline = 30 * ratio;
      txt_blur.filters = [new createjs.BlurFilter(16, 16, 2)];
      txt_blur.cache(
        0,
        0,
        txt_blur.getBounds().width,
        txt_blur.getBounds().height
      );

      //各別字體容器
      var txtmix = new createjs.Container();
      txtmix.addChild(txt_blur, txtoutline, txt);
      txtWrap.addChild(txtmix);

      txtmix.x = i * (fontsize + 6);
      txtmix.regX = txtmix.getBounds().width / 2;
      txtmix.regY = txtmix.getBounds().height / 2;

      txtmix.alpha = 0;
      txtmix.scale = 3;

      return txtmix;
    });
    stage.addChild(txtWrap);

    txtWrap.x =
      canvas.width / 2 -
      ((txtArr.length * (fontsize + 6)) / 2 - (fontsize + 6) / 2); //字的總長以及半個字寬 (因為regX造成起點偏移)
    txtWrap.y = canvas.height * 0.5 - fontsize;

    if (mobileOverride) {
      var h = wintxt.length / 2;
      txtArr.forEach(function (txt, i) {
        if (i < h) {
          txt.x = i * (fontsize + 6);
        } else {
          txt.x = (i - h) * (fontsize + 6);
          txt.y = fontsize * 1.3;
        }
      });
      txtWrap.x =
        canvas.width / 2 - ((fontsize + 6) * Math.floor(txtArr.length / 2)) / 2; //向後退 長度四分之一的字數+半格
      txtWrap.y = canvas.height * 0.4;
    }

    //獲獎數字
    if (mobileOverride) {
      var unitNum = new createjs.Text(
        "77,000",
        fontsize * 2 + "px Orelega One",
        "#FFD700"
      );
    } else {
      var unitNum = new createjs.Text(
        "77,000",
        fontsize * 2.5 + "px Orelega One",
        "#FFD700"
      );
    }

    var num_outline = unitNum.clone();
    num_outline.outline = 20 * ratio;
    num_outline.color = "#cc9318";

    //數字字體陰影
    var num_blur = num_outline.clone();
    num_blur.color = "rgba(0,0,0,0.3)";
    num_blur.outline = 40 * ratio;
    num_blur.filters = [new createjs.BlurFilter(16, 16, 2)];
    num_blur.cache(
      0,
      0,
      num_blur.getBounds().width,
      num_blur.getBounds().height
    );

    //數字字體容器
    var numWrap = new createjs.Container();
    numWrap.addChild(num_blur, num_outline, unitNum);
    stage.addChild(numWrap);

    numWrap.regX = numWrap.getBounds().width / 2;
    numWrap.regY = numWrap.getBounds().height / 2;
    numWrap.x = canvas.width / 2;
    numWrap.y = canvas.height * 0.5 + fontsize * 1.3;
    numWrap.scale = 3;
    numWrap.alpha = 0;

    if (mobileOverride) {
      numWrap.y = canvas.height * 0.5 + fontsize * 2.2;
    }

    //數字上的反光 (白色文字，遮罩移動梯形，因為無法直接用文字當遮罩)
    var rec_mask = new createjs.Shape();
    rec_mask.graphics
      .beginFill("#CCCCCC")
      .drawRect(-180, -30, 60, 400)
      .drawRect(-100, -30, 20, 400)
      .endFill();
    rec_mask.skewX = 30;

    var num_white = unitNum.clone();
    num_white.color = "rgba(256,256,256,0.7)";
    num_white.mask = rec_mask;
    numWrap.addChild(num_white);

    //煙火
    var bullets = [];
    var particles = [];
    function firework() {
      for (var i = 0; i < 10; i++) {
        setTimeout(createFW, 600 * i + Math.random() * 500); //控制發射煙火的頻率
      }

      createjs.Ticker.on("tick", function () {
        //單顆煙火砲彈、拋物線速度變化
        for (var i = bullets.length - 1; i >= 0; i--) {
          var fw = bullets[i];
          fw.x += fw.vX;
          fw.y += fw.vY;
          fw.vY += 0.1;
          fw.scale *= 0.99;
          if (fw.vY > 0) {
            fw.pow--;
          }
          if (fw.pow <= 0) {
            stage.removeChild(fw);
            bullets.splice(i, 1);
            explode(fw);
          }
          if (fw.x > stageW || fw.x < 0) {
            stage.removeChild(fw);
            bullets.splice(i, 1);
          }
        }

        //煙火粒子、爆炸變化
        for (var i = particles.length - 1; i >= 0; i--) {
          var p = particles[i];
          p.x += p.vX;
          p.y += p.vY;
          p.vX *= 0.965; //speedDecay
          p.vY *= 0.965;
          p.vY += 0.05; //gravity
          p.alpha *= 0.996; //fade decay
          p.scale *= 0.98;
          p.visible = Math.random() > 0.3; //有三成時間隱形
          if (p.alpha < 0.4) {
            particles.splice(i, 1);
            stage.removeChild(p);
          }
        }
      });
    }

    function createFW() {
      //製造單顆煙火砲彈

      var s = new createjs.Shape();
      s.graphics.f("rgba(256, 256, 256, 1)").dc(0, 0, 3);

      s.set({
        x: Math.random() * stageW * 0.8 + stageW * 0.2,
        y: stageH - 20,
        vX: Math.random() * 12 - 6,
        vY: Math.random() * 4 - 13,
        pow: Math.random() * 30 + 20,
      });
      stage.addChild(s);
      bullets.push(s);
    }

    function explode(fw) {
      //製作爆炸粒子

      var size = Math.random() * 10 + 20;
      var hasColor = new createjs.Shape();
      var noColor = new createjs.Shape();
      var randomC = Math.floor(Math.random() * 255);
      hasColor.graphics
        .f("rgba(255, " + randomC + ", " + randomC + ", 0.8)")
        .dc(0, 0, 2);
      noColor.graphics.f("rgba(256, 256, 256, 1)").dc(0, 0, 2);

      for (var i = 0, l = size * 20; i < l; i++) {
        var p = Math.random() > 0.5 ? hasColor.clone() : noColor.clone();
        var a = Math.random() * Math.PI * 2;
        var v = (Math.random() * size) / 2; //speed
        p.set({
          x: fw.x,
          y: fw.y,
          scale: size / 10,
          vX: Math.cos(a) * v,
          vY: Math.sin(a) * v,
        });
        stage.addChild(p);
        particles.push(p);
      }
    }

    createjs.Touch.enable(stage);
    stage.enableMouseOver(10);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on("tick", function () {
      stage.update(event);
    });

    window.addEventListener(
      "resize",
      function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stage.update();
      },
      false
    );

    // 動畫總控制
    // createjs.Sound.play("mus");
    coin_explode();
    firework();
    txtArr.forEach(function (letter, i) {
      if (i == txtArr.length - 1) {
        createjs.Tween.get(letter)
          .wait(100 * i)
          .to({ alpha: 1, scale: 1 }, 800, createjs.Ease.quartIn);

        createjs.Tween.get(numWrap)
          .wait(100 * i + 200)
          .to({ alpha: 1, scale: 1 }, 800, createjs.Ease.quartIn);
        createjs.Tween.get(rec_mask)
          .wait(100 * i + 2000)
          .to({ x: 1200 }, 1300);
        createjs.Tween.get(light).wait(900).to({ alpha: 1 }, 1200);
        createjs.Tween.get(light, { loop: -1 }).to({ rotation: 360 }, 12000);
      } else {
        createjs.Tween.get(letter)
          .wait(120 * i)
          .to({ alpha: 1, scale: 1 }, 800, createjs.Ease.quartIn);
      }
    });
  }
}
//# sourceMappingURL=test.js.map
