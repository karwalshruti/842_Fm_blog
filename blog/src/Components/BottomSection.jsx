import React from 'react'
import "./BottomSection.css"
import image from '../Images/news1.png'

const BottomSection = () => {
  const arr=[
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
    {img:image ,desc:"Three strikes net rule has been proposed in a front against illegal music file sharing."},
  ];
  const data=[
    {name:"Ringtone Name"},
    {name:"Ringtone Name"},
    {name:"Ringtone Name"},
  ]
  return (
    <div className="bottom-section">
  <div className="bottom-inner">
    <div className="bottom-left">
      <div className="content-tabs-wrapper">
        <div className="heading-wrapper">
          <div className="heading-arrow">
            <img src="src/images/arrow-icon.png" alt="" />
          </div>
          <div className="tab-heading">Latest</div>
        </div>
        <div className="album-tabs-wrap">
          <div className="tabs-buttons">
            <button className="tab-btn">Showbiz</button>
            <button className="tab-btn active-tab-btn">Music</button>
            <button className="tab-btn">Funny</button>
          </div>
          <div className="tabs-content">
            {arr.map((elem,index)=>
            <><div className="tabs-content-card">
            <div className="tab-img-div">
              <img src={elem.img} alt="" className="card-img" />
            </div>
            <div className="tab-card-content">
          {elem.desc}
            </div>
            <div className="tab-card-button-wrap">
              <div className="button-arrow">
                <img src="src/images/arrow-icon.png" alt="" />
              </div>
              <button className="tab-card-button">read more</button>
            </div>
          </div>
          </>)}
            
          </div>
        </div>
      </div>
      <div className="horizontal-separtor">
        <img src="src/images/drop-shadow-img.png" alt="" />
      </div>
      <div className="adv-banner-wrap">
        <div className="adv-banner">
          <div className="s-advertisment">Advertisment</div>
          <div className="s-space">Space</div>
          <div className="s-size">250 x 250</div>
        </div>
        <div className="adv-banner">
          <div className="s-advertisment">Advertisment</div>
          <div className="s-space">Space</div>
          <div className="s-size">250 x 250</div>
        </div>
      </div>
      <div className="horizontal-separtor">
        <img src="src/images/drop-shadow-img.png" alt="" />
      </div>
      <div className="presenter-section">
        <div className="heading-wrapper">
          <div className="heading-arrow">
            <img src="src/images/arrow-icon.png" alt="" />
          </div>
          <div className="tab-heading">
            Presenter <span> of the Month</span>
          </div>
        </div>
        <div className="presenter-wrapper-outer">
          <div className="presenter-wrapper-inner">
            <div className="presenter-image">
              <img
                src="src/images/presenter-img.png"
                alt=""
                className="present-img"
              />
            </div>
            <div className="presenter-info">
              <div className="presenter-title">
                Presenter of the month heading text
              </div>
              <div className="presenter-content">
                iTunes for theatre service marks a pivotal switch for an
                otherwise, traditional profession. iTunes for theatre service
                marks a pivotal switch for an otherwise, traditional profession.
              </div>
            </div>
          </div>
          <div className="arrow-button">
            <button>
              <svg viewBox="0 0 24 24" width={25} height={25}>
                <path d="M11.164,19.061,9.043,16.939,13.982,12,9.043,7.061l2.121-2.122,5.293,5.293a2.5,2.5,0,0,1,0,3.536Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="ringtone-poll-wrapper">
        <div className="ringtone-wrap">
          <div className="heading-wrapper">
            <div className="heading-arrow">
              <img src="src/images/arrow-icon.png" alt="" />
            </div>
            <div className="tab-heading">
              Get <span>Ringtones</span>
            </div>
          </div>
          <div className="ringtone-template">
            
            {data.map((item)=>(
              <div className="light-grey-card">
              <div className="ringtone-name">{item.name}</div>
              <div className="stars">
                <svg viewBox="0 0 24 24" width={10} height={10}>
                  <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
                </svg>
                <svg viewBox="0 0 24 24" width={10} height={10}>
                  <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
                </svg>
                <svg viewBox="0 0 24 24" width={10} height={10}>
                  <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
                </svg>
                <svg viewBox="0 0 24 24" width={10} height={10}>
                  <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
                </svg>
                <svg viewBox="0 0 24 24" width={10} height={10}>
                  <path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" />
                </svg>
              </div>
              <div className="downloads-n-button">
                15,472 downloads
                <div className="play-button-wrap">
                  <button className="play-button">play</button>
                  <button className="play-button">Download</button>
                </div>
              </div>
            </div>
            ))}
            <div className="view-all-button">
              <div className="button-arrow">
                <img src="src/images/arrow-icon.png" alt="" />
              </div>
              <a href="#" className="view-all">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="poll-ques-wrap">
          <div className="heading-wrapper">
            <div className="heading-arrow">
              <img src="src/images/arrow-icon.png" alt="" />
            </div>
            <div className="tab-heading">
              Poll <span>Question</span>
            </div>
          </div>
          <div className="poll-template">
            <div className="light-grey-card">whats your favourite Gadget ?</div>
            <div className="poll-radio-inputs">
              <div className="input-wrap">
                <input
                  type="radio"
                  name="gadget"
                  id="camera"
                  className="poll-input"
                />
                <label className="input-label" htmlFor="camera">
                  Camera
                </label>
              </div>
              <div className="input-wrap">
                <input
                  type="radio"
                  name="gadget"
                  id="laptop"
                  className="poll-input"
                />
                <label className="input-label" htmlFor="laptop">
                  Laptop
                </label>
              </div>
              <div className="input-wrap">
                <input
                  type="radio"
                  name="gadget"
                  id="mpplayer"
                  className="poll-input"
                />
                <label className="input-label" htmlFor="mpplayer">
                  MP3 Player
                </label>
              </div>
              <div className="input-wrap">
                <input
                  type="radio"
                  name="gadget"
                  id="mobile-cell"
                  className="poll-input"
                />
                <label className="input-label" htmlFor="mobile-cell">
                  Mobile/Cell
                </label>
              </div>
            </div>
            <div className="poll-submit-button">
              <div className="button-arrow">
                <img src="src/images/arrow-icon.png" alt="" />
              </div>
              <button className="poll-submit">Submit</button>
              <a href="#" className="previous-poll">
                {" "}
                Previous Polls
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-right">
      <div className="large-adv-banner">
        <div className="adv-label">advertisment</div>
        <div className="large-banner-img">
          <img className="large-img" src="src/images/large-banner.png" alt="" />
          <div className="adv-overlay-1">
            <span>Advertisment</span>
          </div>
          <div className="adv-overlay-2">
            <span>Space 300 * 250</span>
          </div>
        </div>
      </div>
      <div className="facebook-blog-wrapper">
        <div className="facebook-heading">Join FMBLOG On Facebook</div>
        <div className="facebook-blog-inner">
          <div className="facebook-head">
            <div className="f-blank-blog" />
            <div className="easy-like">
              <div className="easy-fm">easy fm on Facebook</div>
              <div className="you-like">you like this. unlike</div>
            </div>
          </div>
          <div className="facebook-middle">
            <div className="f-middle-content">
              easy fm A study is the Saturday Magazine of the Daily Nation
              states that the senior bachelor is more unlikely to get a
              promotion in the work place because he is single passed the
              required marriageable age. Over 45 and still single. Who says that
              getting married makes you a better person??? Marcus&amp;Munene on
              the Easy Breakfast.senior bachelor is more unlikely to get a
              promotion in the work place because he is single passed the
              required marriageable age. Over 45 and still single. Who says that
              getting married makes you a better person??? Marcus&amp;Munene on
              the Easy Breakfast......
            </div>
            <div className="f-timeline">9 hours ago</div>
          </div>
          <div className="facebook-bottom">
            <div className="like-counts">196,478 peoples like easy fm</div>
            <div className="f-bottom-inner">
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
              <div className="liked-user-profile">
                <div className="like-user-img">
                  <img
                    src="src/images/presenter-img.png"
                    alt=""
                    className="user-img"
                  />
                </div>
                <div className="liked-user-name">Omar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="twitter-blog-wrapper">
        <div className="twitter-logo">
          <img src="src/images/twitter-logo.png" alt="" />
        </div>
        <div className="twitter-info-links">
          Mobile Boilerplate: a best practice baseline for your mobile Web app -
          http://bit.ly/dRJO9f
        </div>
        <div className="twitter-info-links">
          Dummy text dropdo: a quick and simple file viewer online -
          http://dropdo.com
        </div>
        <div className="follow-us-logo">
          <img src="src/images/follow-us-logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default BottomSection
