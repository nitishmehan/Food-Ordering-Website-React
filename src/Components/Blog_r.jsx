import React, { useState, useEffect } from 'react';

function Blog_r({ img, title, content, author, date, onBack }) {
  const [ count, setcount ] = useState(255);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    const fullName = e.target['full-name'].value;
    const email = e.target['email-address'].value;
    const commentText = e.target['comments'].value;

    if (!fullName || !email || !commentText) {
      alert('All fields are required!');
      return;
    }

    const newComment = {
      id: Date.now(),
      fullName,
      email,
      commentText,
      date: new Date().toLocaleDateString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    e.target.reset();
  };

  return (
    <div className="right">
      <div className="review-1">
        <img src={img} alt={title || 'Blog Image'} />
      </div>
      <div className="review-2" id="dark_color">
        <p id="dark_color">By {author} in Food</p>
        <span id="dark_color">on {date}</span>
      </div>
      <div className="review-3" id="dark_color">
        <p>{content}</p>
      </div>

      <div className="review-4">
        <div className="review-4-box">
          <div className="review-4-img">
            <img src="images/review_photos/person1.png" alt="" />
          </div>
          <div className="review-4-name" id="dark_color">
            by John wiki on
          </div>
        </div>

        <div className="review-4-box-2">
          <div className="review-4-box">
            <div className="review-4-like">
              <img
                src="https://img.icons8.com/?size=100&id=47942&format=png&color=000000"
                alt=""
                id="inverto"
                onClick={() => setcount(count + 1)}

              />
              <p id="dark_color">{count} </p>
            </div>
          </div>

          <div className="review-4-box-2">
            <div className="review-4-dislike">
              <img
                src="https://img.icons8.com/?size=100&id=87706&format=png&color=000000"
                alt=""
                id="inverto"
                onClick={() => setcount(count - 1)}

              />
              <p id="dark_color"></p>
            </div>
          </div>
          <div className="review-4-box-btn">
            <button>REPLY</button>
          </div>
        </div>
      </div>

      <div className="comments-container dark_back">
        <h2>Comments</h2>
        <div className="comment dark_icon dark_color">
          <div className="comment-avatar">
            <img src="images/review_photos/comment1.png" alt="Megan Jones" />
          </div>
          <div className="comment-content">
            <h4>Megan Jones</h4>
            <p>Aug 20, 2022</p>
            <p>
              I never knew the history behind nachos! It's fascinating to learn
              how they were invented. Definitely going to try making them at
              home.
            </p>
            <a href="#" className="reply">
              Reply
            </a>
          </div>
        </div>
        <div className="comment special-comment dark_icon dark_color">
          <div className="comment-avatar">
            <img src="images/review_photos/comment2.png" alt="Mary Brown" />
          </div>
          <div className="comment-content">
            <h4>Mary Brown</h4>
            <p>Aug 20, 2022</p>
            <p>
              Thank you for your comment! I'm glad you found the history of
              nachos interesting. Let me know how your homemade nachos turn out!
            </p>
            <a href="#" className="reply">
              Reply
            </a>
          </div>
        </div>
        <div className="comment dark_icon dark_color">
          <div className="comment-avatar">
            <img src="images/review_photos/comment3.png" alt="Celia Abbott" />
          </div>
          <div className="comment-content">
            <h4>Celia Abbott</h4>
            <p>Aug 20, 2022</p>
            <p>
              Nachos are my guilty pleasure! I could eat them every day. This
              article has inspired me to get creative with my toppings next
              time. Nachos are the ultimate comfort food for me. Nothing beats a
              big plate of cheesy, crispy chips loaded with all my favorite
              toppings.
            </p>
            <a href="#" className="reply">
              Reply
            </a>
          </div>
        </div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment dark_icon dark_color">
              <div className="comment-avatar">
                <img
                  src="https://via.placeholder.com/50"
                  alt={`${comment.fullName}'s avatar`}
                />
              </div>
              <div className="comment-content">
                <h4>{comment.fullName}</h4>
                <p>{comment.date}</p>
                <p>{comment.commentText}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Add Your Opinion 😊 !</p>
        )}
      </div>

      <div className="comment-form-container dark_color dark_back">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                id="email-address"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="comments">Comments</label>
            <textarea
              required
              id="comments"
              rows="4"
              placeholder="Comment"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog_r;
