import React from 'react';

import Typing from 'react-typing-animation';
import './mailboard.scss';

function MailBoard() {
  return(
    <div id="letterContainer">
      <div id="mailBg">
        <div id='bgImage'></div>
        <div id='letter'>
          <Typing speed={120}>
            <span>祝永远17岁的金翎21岁生日快乐！:D</span><br/>
            <Typing.Speed ms={80} />
            <span>不知道今年有没有给自己买个蛋糕吃呢？21岁的话有没有象征性的喝点酒呢？有时候觉得仪式感这东西还挺重要的。</span><br/>
            <span>其实还是有很多话想跟你说，不过这里就只说祝福好啦~~ </span><br/><br/>
            <span>祝你新的一岁，能够顺顺利利，开开心心，早点毕业，名校Offer拿到手软，早发paper，走上人生巅峰。</span><br/>
            <span>你还记得有一次你跟我说你是滤纸型体质，配不上世间的美好，只敢在垃圾桶里寻找吗？</span>
            <span>说实话，我不是个很会说话的人，我能说的就是，在这过去一年多里（现在也是），你就是我的光，确确实实把我从一片颓废里救赎了出来。</span>
            <span>而且，我相信一定也有别的人被你温暖过，救赎过。</span><br/>
            <span>所以啊，小仙女，你理所当然配得上所有的温柔和幸福。</span><br/>
            <span>新的一年，要多笑哦。我真的真的，最喜欢看你笑了。</span><br/>
            <br/>
            <span style={{float: "right"}}>反正你知道我是谁（逃</span>
          </Typing>
        </div>
      </div>
    </div>
  );
}

export default MailBoard;
