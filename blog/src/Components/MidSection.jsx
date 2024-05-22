import React from 'react'
import "./MidSection.css"
const MidSection = () => {
  return (
    <div className="mid-section">
  <div className="mid-section-inner">
    <div className="mid-left">
      <div className="banner-section">
        <div className="banner-img-grup">
          <img src="src/images/banner-img.png" alt="" className="banner-img" />
          <div className="banner-overlay">
            <div className="overlay-heading">
              No one ever promised you an easy life.
            </div>
            <div className="overlay-info">
              But there’s one readio station that does promise you easy
              listening. But there’s one readio station that does promise you
              easy listening. But there’s one readio station that does promise
              you easy listening.
            </div>
            <div className="overlay-viewall">
              <a href="#" className="viewall-link">
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="banner-blog">
          <div className="blog-arrow">
            <div className="arrow-svg">
              <svg viewBox="0 0 24 24" width={20} height={20}>
                <path d="M13.422,19.061,8.129,13.768a2.5,2.5,0,0,1,0-3.536l5.293-5.293,2.121,2.122L10.6,12l4.939,4.939Z" />
              </svg>
            </div>
          </div>
          <div className="blog-columns">
            <div className="blog-img-section">
              <div className="blog-img">
                <img src="src/images/blog-img.png" alt="" />
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-title">
                The early breakfast with Gladys Gachanja
              </div>
              <div className="blog-timing">5 am - 6 am</div>
              <div className="about-blog">
                wake up early with Gladys every morning and you're guaranteed
                inspiration..
              </div>
            </div>
          </div>
          <div className="blog-columns">
            <div className="blog-img-section">
              <div className="blog-img">
                <img src="src/images/blog-img.png" alt="" />
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-title">
                The early breakfast with Gladys Gachanja
              </div>
              <div className="blog-timing">5 am - 6 am</div>
              <div className="about-blog">
                wake up early with Gladys every morning and you're guaranteed
                inspiration..
              </div>
            </div>
          </div>
          <div className="blog-arrow">
            <div className="arrow-svg">
              <svg viewBox="0 0 24 24" width={20} height={20}>
                <path d="M11.164,19.061,9.043,16.939,13.982,12,9.043,7.061l2.121-2.122,5.293,5.293a2.5,2.5,0,0,1,0,3.536Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mid-right">
      <div className="player-section">
        <div className="player-heading">
          <div className="player-arrow-icon">
            {/* <img src="/images/arrow-icon.png" alt="" /> */}
          </div>
          <div>Now Playing</div>
        </div>
        <div className="music-player">
          <div className="player-inner">
            <div className="about-music-artist">
              <div className="music-img-wrap">
                <img src="src/images/song-icon.png" alt="" className="song-icon" />
              </div>
              <div className="about-artist">
                <div className="artist-name">Artist Name Heading</div>
                <div className="song-sub-heading">
                  Music album subheading title
                </div>
              </div>
            </div>
            <div className="curr-song-n-range-wrapper">
              <div className="name-n-volume">
                <div className="curr-song">Playing: Song name</div>
                <div className="volume-range">...</div>
              </div>
              <div className="song-time">04:37</div>
              <div className="song-range">
                <input type="range" className="song-skip-range" />
              </div>
            </div>
            <div className="previous-song-info">
              <div className="previous-song-name">
                Previously Played : Song name
              </div>
            </div>
            <div className="player-buttons-wrap">
              <div className="player-button">
                <button className="player-btn">
                  <svg
                    width={25}
                    height={10}
                    viewBox="0 0 16 16"
                    className="rotate-svg-icon"
                  >
                    <path d="M0 1v14l7-7z" />
                    <path d="M7 1v14l7-7z" />
                    <path d="M14 1h2v14h-2v-14z" />
                  </svg>
                </button>
                <span className="btn-separator" />
                <button className="player-btn">
                  <svg viewBox="0 0 24 24" width={25} height={10}>
                    <rect x={3} width={7} height={24} />
                    <rect x={14} width={7} height={24} />
                  </svg>
                </button>
                <span className="btn-separator" />
                <button className="player-btn">
                  <svg viewBox="0 0 24 24" width={25} height={10}>
                    <path d="M19.749,9.464,5,.048V23.989L19.743,14.54a3,3,0,0,0,.006-5.076Z" />
                  </svg>
                </button>
                <span className="btn-separator" />
                <button className="player-btn">
                  <svg width={25} height={10} viewBox="0 0 1920 1920">
                    <path d="M0 1920h1920V0H0z" fillRule="evenodd" />
                  </svg>
                </button>
                <span className="btn-separator" />
                <button className="player-btn">
                  <svg width={25} height={10} viewBox="0 0 16 16">
                    <path d="M0 1v14l7-7z" />
                    <path d="M7 1v14l7-7z" />
                    <path d="M14 1h2v14h-2v-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listen-fmblog-wrapper">
        <div className="listen-heading">
          Listen to <span>FM</span>BLOG
        </div>
        <div className="listen-inner-wrapper">
          <div className="mike-icon">
            <img className="mike-img" src="src/images/mike-img.png" alt="" />
          </div>
          <div className="about-listen-wrap">
            “Easy fm is giving you the chance to become a radio presenter for a
            day! Listen to ‘real radio’ between 2 &amp; 4pm on easy fm to find
            out how other people are their impressing the nation with their
            talents! To participate, text the words ‘Real Radio’ and your name
            to 5474 on Safaricom or Zain.”
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MidSection
