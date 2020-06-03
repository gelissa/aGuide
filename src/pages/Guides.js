import React from "react";
import protestGuide from '../assets/protestGuide.pdf'

const Guides = () => {
  return (
    <div className="container">

      <section className="">
          <div className="row guideSection">
            <div className="col guides">
            <embed src={protestGuide} />
            </div>
            </div>
            <div className="row guideSection">
            <div className="col guides">
            <embed src="https://issuu.com/nlc.sf.2014/docs/beyondthestreets_final" />
            </div>
            </div>
          
      </section>

 <hr />
      <section className="leet">
        <p>
          <i>
            if sending texts, you can use leet to make them harder to detect
          </i>
        </p>
        <p>
          <i>
            credit to <a href="http://1337.me">1337.me</a>
          </i>
        </p>
        {/* <!-- L33T --> */}
        <div className="jumbotron">
          <form className="inner cover" _lpchecked="1">
            <div className="form-group">
              <div className="col-xs-12">
                <input
                  type="text"
                  className="form-control"
                  id="lametext"
                  placeholder="Put your Text in here to leet it!"
                  onkeyup="lamechanged()"
                  onblur="_gaq.push(['_trackEvent', '1337', 'Keypress', this.value]);"
                  autofocus=""
                />

                <div
                  id="speak"
                  onclick="_gaq.push(['_trackEvent', '1337', 'voice', 'voiceTextActivate', value]);"
                  className="capable"
                ></div>
              </div>
            </div>
            <br />
            <br />

            <div className="form-group">
              <input
                type="checkbox"
                id="adv"
                onclick="lamechanged(); _gaq.push(['_trackEvent', '1337', 'checkbox', 'pro-mode', value]);"
              />{" "}
              <label for="adv">pro-mode</label>
            </div>

            <div className="form-group">
              <div className="col-xs-12">
                <input
                  type="text"
                  className="form-control"
                  id="l33ttext"
                  placeholder="Pu7 Ur 73X7 1N h3R3 70 L337 17!"
                  onkeyup="l33tchanged()"
                  onblur="_gaq.push(['_trackEvent', '1337', 'LeetKeypress', this.value]);"
                />
              </div>
            </div>
          </form>
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default Guides;
