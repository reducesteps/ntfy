import * as React from 'react';
import SiteLayout from "./SiteLayout";

const Home = () => {
    return (
        <SiteLayout>
            <h1>Send push notifications to your phone or desktop via PUT/POST</h1>
            <p>
                <b>ntfy</b> (pronounce: <i>notify</i>) is a simple HTTP-based <a
                href="https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern">pub-sub</a> notification
                service.
                It allows you to send notifications to your phone or desktop via scripts from any computer,
                entirely <b>without signup, cost or setup</b>. It's also <a
                href="https://github.com/binwiederhier/ntfy">open source</a> if you want to run your own.
            </p>
            <div id="screenshots">
                <a href="static/img/screenshot-curl.png"><img src="static/img/screenshot-curl.png"/></a>
                <a href="static/img/screenshot-web-detail.png"><img src="static/img/screenshot-web-detail.png"/></a>
                <span className="nowrap">
                    <a href="static/img/screenshot-phone-main.jpg"><img src="static/img/screenshot-phone-main.jpg"/></a>
                    <a href="static/img/screenshot-phone-detail.jpg"><img src="static/img/screenshot-phone-detail.jpg"/></a>
                    <a href="static/img/screenshot-phone-notification.jpg"><img src="static/img/screenshot-phone-notification.jpg"/></a>
                </span>
            </div>

            <h2 id="publish" className="anchor">Publishing messages</h2>
            <p>
                <a href="docs/publish/">Publishing messages</a> can be done via PUT or POST. Topics are created on
                the fly by subscribing or publishing to them.
                Because there is no sign-up, <b>the topic is essentially a password</b>, so pick something that's
                not easily guessable.
            </p>
            <p className="smallMarginBottom">
                Here's an example showing how to publish a message using a POST request (via <tt>curl -d</tt>):
            </p>
            <code>
                curl -d "Backup successful 😀" <span className="ntfyUrl">ntfy.sh</span>/mytopic
            </code>
            <p className="smallMarginBottom">
                There are <a href="docs/publish/">more features</a> related to publishing messages: You can set a
                <a href="docs/publish/#message-priority">notification priority</a>, a <a
                href="docs/publish/#message-title">title</a>,
                and <a href="docs/publish/#tags-emojis">tag messages</a>.
                Here's an example using some of them together:
            </p>
            <code>
                curl \<br/>
                &nbsp;&nbsp;-H "Title: Unauthorized access detected" \<br/>
                &nbsp;&nbsp;-H "Priority: urgent" \<br/>
                &nbsp;&nbsp;-H "Tags: warning,skull" \<br/>
                &nbsp;&nbsp;-d "Remote access to $(hostname) detected. Act right away." \<br/>
                &nbsp;&nbsp;<span className="ntfyUrl">ntfy.sh</span>/mytopic
            </code>
            <p>
                Here's what that looks like in the <a href="docs/subscribe/phone/">Android app</a>:
            </p>
            <figure>
                <img src="static/img/screenshot-phone-popover.png" style={{maxHeight: "200px"}}/>
                <figcaption>Urgent notification with pop-over</figcaption>
            </figure>

            <h2 id="subscribe" className="anchor">Subscribe to a topic</h2>
            <p>
                You can create and subscribe to a topic either <a href="docs/subscribe/phone/">using your phone</a>,
                in <a href="docs/subscribe/web/">this web UI</a>, or in your own app by <a
                href="docs/subscribe/api/">subscribing via the API</a>.
            </p>

            <h3 id="subscribe-phone" className="anchor">Subscribe from your phone</h3>
            <p>
                Simply get the app and start <a href="docs/publish/">publishing messages</a>. To learn more about
                the app,
                <a href="docs/subscribe/phone/">check out the documentation</a>.
            </p>
            <p>
                <a href="https://play.google.com/store/apps/details?id=io.heckel.ntfy"><img src="static/img/badge-googleplay.png"/></a>
                <a href="https://f-droid.org/en/packages/io.heckel.ntfy/"><img src="static/img/badge-fdroid.png"/></a>
                <a href="https://apps.apple.com/us/app/ntfy/id1625396347"><img src="static/img/badge-appstore.png"/></a>
            </p>
            <p>
                Here's a video showing the app in action:
            </p>
            <figure>
                <video controls muted autoPlay loop src="static/img/android-video-overview.mp4" style={{maxWidth: "650px"}}></video>
                <figcaption>Sending push notifications to your Android phone</figcaption>
            </figure>

            <h3 id="subscribe-web" className="anchor">Subscribe via web app</h3>
            <p>
                Subscribe to topics in the <a href="app">web app</a> and receive messages as <b>desktop
                notification</b>.
                It is available at <b><a href="app"><span className="ntfyUrl">ntfy.sh</span>/app</a></b>.
            </p>
            <figure>
                <a href="app"><img src="static/img/screenshot-web-detail.png" width="100%"/></a>
                <figcaption>ntfy web app, available at <a href="app"><span
                    className="ntfyUrl">ntfy.sh</span>/app</a></figcaption>
            </figure>

            <h3 id="subscribe-api" className="anchor">Subscribe using the API</h3>
            <p>
                There's a super simple API that you can use to integrate your own app. You can consume
                a <a href="docs/subscribe/api/#subscribe-as-json-stream">JSON stream</a>,
                an <a href="docs/subscribe/api/#subscribe-as-sse-stream">SSE/EventSource stream</a>,
                a <a href="docs/subscribe/api/#subscribe-as-raw-stream">plain text stream</a>,
                or <a href="docs/subscribe/api/#websockets">via WebSockets</a>.
            </p>
            <p className="smallMarginBottom">
                Here's an example for JSON. The <b>connection stays open</b>, so you can retrieve messages as they
                come in:
            </p>
            <code>
                $ curl -s <span className="ntfyUrl">ntfy.sh</span>/mytopic/json<br/>
                {`{"id":"SLiKI64DOt","time":1635528757,"event":"open","topic":"mytopic"}`}<br/>
                {`{"id":"hwQ2YpKdmg","time":1635528741,"event":"message","topic":"mytopic","message":"Hi!"}`}<br/>
                {`{"id":"DGUDShMCsc","time":1635528787,"event":"keepalive","topic":"mytopic"}`}<br/>
                ...
            </code>
            <p>
                Here's a short video demonstrating it in action:
            </p>
            <figure>
                <video controls muted autoPlay loop src="static/img/android-video-subscribe-api.mp4" style={{maxWidth: "650px"}}></video>
                <figcaption>Subscribing to the JSON stream with <tt>curl</tt></figcaption>
            </figure>

            <h3 id="docs" className="anchor">Check out the docs!</h3>
            <p>
                ntfy has so many more features and you can learn about all of them <a href="docs/">in the
                documentation</a>
                (I tried my very best to make it the best docs ever 😉, not sure if I succeeded, hehe).
            </p>
            <figure>
                <a href="docs/"><img width="100%" src="static/img/screenshot-docs.png"/></a>
                <figcaption>Check out the documentation</figcaption>
            </figure>

            <h3 id="free-software" className="anchor">100% open source &amp; forever free</h3>
            <p>
                I love free software, and I'm doing this because it's fun. I have no bad intentions, and I will
                never monetize or sell your information. This service will always stay
                <a href="https://github.com/binwiederhier/ntfy">free and open</a>.
                You can read more in the <a href="docs/faq/">FAQs</a> and in the <a href="docs/privacy/">privacy
                policy</a>.
            </p>

            <center id="ironicCenterTagDontFreakOut"><i>Made with ❤️ by <a href="https://heckel.io">Philipp C. Heckel</a></i></center>
        </SiteLayout>
    );
};

export default Home;
