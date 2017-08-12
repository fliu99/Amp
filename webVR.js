var myPicture = vRViewPlayer('#vr', {
  image: 'Image.jpg',
  is_stereo: false
})
window.addEventListener('load',myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 15,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot2', {
    pitch: 0,
    yaw: 90,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot3', {
    pitch: 0,
    yaw: 45,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot4', {
    pitch: 0,
    yaw: -95,
    radius: 0.10,
    distance: 1
  });
});

myPicture.on('click',function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    alert('Here at the beach I relax and have fun on a hot day!');
  }
  if (event.id == 'hotspot2'){
    alert('I use the highway as my method of transportation in order to get to my destination quickly.')
  }
  if (event.id == 'hotspot3'){
    alert('The shopping center is where I buy all my daily necessities and things I want.')
  }
  if (event.id == 'hotspot4'){
    myPicture.setContent({
      image: 'Image2.jpg',
      is_stereo: false,
      height: '100%',
      width: '100%'
    });
      myPicture.addHotspot('creating-hotspot-1D', {
        pitch: 0,
        yaw: 15,
        radius: 0.10,
        distance: 1
      });
      myPicture.addHotspot('hotspot2D', {
        pitch: 0,
        yaw: 90,
        radius: 0.10,
        distance: 1
      });
      myPicture.addHotspot('hotspot3D', {
        pitch: 0,
        yaw: 45,
        radius: 0.10,
        distance: 1
      });
      myPicture.addHotspot('hotspot4D', {
        pitch: 0,
        yaw: -95,
        radius: 0.10,
        distance: 1
      });

    myPicture.on('click',function(event){
      console.log('register all click events');
      if (event.id == 'creating-hotspot-1D'){
        alert('Here at the beach I relax and have fun on a hot day!');
      }
      if (event.id == 'hotspot2D'){
        alert('I use the highway as my method of transportation in order to get to my destination quickly.')
      }
      if (event.id == 'hotspot3D'){
        alert('The shopping center is where I buy all my daily necessities and things I want.')
      }
      if (event.id == 'hotspot4D'){
        myPicture.setContent({
          image: 'Image.jpg',
          is_stereo: false,
          height: '100%',
          width: '100%'
        });
  }
});
}
}
