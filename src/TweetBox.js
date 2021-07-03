import React, { useState } from 'react'
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");


    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: 'Taniya Mittal',
            username: 'taniya_76',
            verified: true,
            text: tweetMessage,
            avatar: 'https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg',
            image: tweetImage
        });
        setTweetMessage("");
        setTweetImage("");

    }


    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="/broken-image.jpg"></Avatar>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL" type="text"
                />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton" > Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
