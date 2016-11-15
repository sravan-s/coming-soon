(() => {
  $.magicCanvas.draw({
    type: 'random-move',
    rgb: circlePos => {
      let px = circlePos.x;
      let py = circlePos.y;
      // do some computation....
      return {
        r: parseInt(px % 255),
        g: parseInt(py % 255),
        b: 203
      };
    }
  });
})();
