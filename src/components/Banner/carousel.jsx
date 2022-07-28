import React,{Component} from 'react';
// import Carousel from 'react-elastic-carousel'

class Carouselcomp extends Component{
  state={
    items:[
      {id:1,url:'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg'},
      {id:2,url:'https://jongund.github.io/aria-examples/bootstrap-carousel/images/lands-endslide__800x600.jpg'},
      {id:3,url:'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg'},
      {id:4,url:'https://jongund.github.io/aria-examples/bootstrap-carousel/images/lands-endslide__800x600.jpg'},
      {id:5,url:'https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg'}
    ]
  }

  render(){
    const {items}=this.state;
    return(
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}
export default new Carouselcomp();