class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var graphics = this.add.graphics({
            lineStyle: {
                width: 1,
                color: 0xffffff,
                alpha: 1
            },
            fillStyle: {
                color: 0xff0000,
                alpha: 1
            },
        });
        var shape0 = CreateRectangle(graphics, 150, 200, 100, 100);
        var shape1 = CreateTriangle(graphics, 100, 150, 200, 350, 200, 150);
        DrawIntersectPoints(graphics, shape0, shape1);
    }

    update() { }
}

var CreateRectangle = function (graphics, x, y, width, height) {
    var geom = new Phaser.Geom.Rectangle(x, y, width, height);
    graphics.strokeRectShape(geom);
    return geom;
}

var CreateTriangle = function (graphics, x1, y1, x2, y2, x3, y3) {
    var geom = new Phaser.Geom.Triangle(x1, y1, x2, y2, x3, y3);
    graphics.strokeTriangleShape(geom);
    return geom;
}

var DrawIntersectPoints = function (graphics, rect, tri) {
    var out = Phaser.Geom.Intersects.GetRectangleToTriangle(rect, tri);
    for (var i = 0, cnt = out.length; i < cnt; i++) {
        graphics.fillPointShape(out[i], 10);
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
};

var game = new Phaser.Game(config);