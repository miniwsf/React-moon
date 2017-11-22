import React, { Component } from 'react';

class Wish extends Component {
    constructor(props) {
        super(props);
        this.state={
          bestWish:"",
          words: "圣诞节快乐哦，把15年的圣诞礼物重新给你找回来。但是你再也不会是当初的那个小绵羊了，时间匆匆流走，别再回头。",
          count:0
        };
    }
    componentDidMount() {
      let wordLength=this.state.words.length;
      this.timerID = setInterval(
          () => this.tick(),
          500
      );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
      let count=this.state.count;
      let words=this.state.words;
      if(count>=this.state.words.length){
        count=1;
      }
      else{
          count+=1;
      }
        this.setState({
            bestWish: words.substring(0,count),
            count:count
        });
    }
  render() {
    return (
        <div className="wish-word">
          <div className="wish-title">Merry Christmas</div>
          <div>
              {this.state.bestWish}
          </div>
        </div>
    );
  }
}

export default Wish;
