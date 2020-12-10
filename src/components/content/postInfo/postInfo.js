import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../../spinner/spinner';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from '../../button/button';
import SubredditIcon from '../../../assets/images/subreddit.jpg';

class PostInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: null,
            error: false
        }
    }

    componentDidMount() {
        const id = this.props.location.state.data;
        axios.get(`https://api.reddit.com/api/info/?id=${id}`)
            .then(response => {
                this.setState({ posts: response.data.data.children });
            })
            .catch(error => {
                this.setState({ error: true });
            })
    }

    render() {

        let post = null;
        let content = this.state.error ? <p>Data can't be loaded</p> : <Spinner />;
        if (this.state.posts && this.state.posts.length) {
            post = this.state.posts.map(item => item.data);
            
            content = (
                <div className="posts-wrapper">
                    {post.map((post, index) => (
                        <div className="post hoverable" key={index} onClick={() => this.navigate(post.subreddit_id)} >
                            <div className="post-sidebar">{console.log('post', post)}
                                <ArrowUpwardIcon className="upvote" />
                                <span>{post.ups}</span>
                                <ArrowDownwardIcon className="downvote" />
                            </div>
                            <div className="post-title">
                                <div className="left">
                                    <img src={SubredditIcon} alt="img" />
                                    <span className="subreddit-name">r/{post.subreddit}</span>
                                    <span className="post-user">Posted by u/</span>
                                    <span className="post-user underline">{post.author}</span>
                                    <div className="spacer"></div>
                                </div>
                                <Button label=" + JOIN" />
                            </div>
                            <div className="post-body">
                                <span className="title">{post.title}</span>
                                {post.selftext && <span className="description">{post.selftext}</span>}
                            </div>
                            <div className="post-footer">
                                <div className="comments footer-action">
                                    <ModeCommentIcon className="comment-icon" />
                                    <span>{post.num_comments} Comments</span>
                                </div>
                                <div className="share footer-action">
                                    <ShareIcon />
                                    <span>Share</span>
                                </div>
                                <div className="save footer-action">
                                    <BookmarkIcon />
                                    <span>Save</span>
                                </div>
                                <MoreHorizIcon className="more-icon footer-action" />
                            </div>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <div>
                { content}
            </div>
        )
    }
}

export default PostInfo;