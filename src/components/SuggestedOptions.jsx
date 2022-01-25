/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTrail, animated } from '@react-spring/web'; //add useSpring, to import list for contact info
import suggestions from "./suggestions";
import {aboutSPR} from "./suggestions"

export default function SuggestedOptions({ onSend, onSuggestionClick }) {
  const trail = useTrail(suggestions.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  // const animContactStyle = useSpring({
  //   from: { opacity: 0},
  //   to: { opacity: 1},
  // });

  // const contactText =
  //   "Please send feedback and comments to swantonpoppycp@gmail.com";

  const suggestionBubbleStyle = (theme) =>
    css`
      display: block;
      padding: 10px 20px;
      margin: 20px auto;
      background-color: ${theme.color.accent};
      color: white;
      width: max-content;
      text-align: center;
      max-width: 400px;
      border-radius: 30px;
      cursor: pointer;
      transition: transform 0.5s, box-shadow 0.5s;
      box-shadow: 0 10px 20px transparent;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px rgba(30, 78, 33, 0.257);
        }
      }
    `;
    const mainBubbleStyle = (theme) =>
    css`
      display: block;
      padding: 10px 50px;
      margin: 20px auto;
      background-color: ${theme.color.light};
      color: white;
      width: max-content;
      text-align: center;
      max-width: 800px;
      border-radius: 30px;
      cursor: pointer;
      transition: transform 0.5s, box-shadow 0.5s;
      box-shadow: 0 10px 20px transparent;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px rgba(30, 78, 33, 0.257);
        }
      }
    `;
    const textBubbleStyle = (theme) =>
      css` 
        display: block;
        font-size: 12px;
        padding: 10px 20px;
        margin: 20px auto;
        background-color: ${theme.color.accent};
        color: white;
        width: max-content;
        text-align: center;
        max-width: 400px;
        border-radius: 30px;
        cursor: pointer;
        transition: transform 0.5s, box-shadow 0.5s;
        box-shadow: 0 10px 20px transparent;
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 15px rgba(30, 78, 33, 0.257);
          }
        }
      `;

    const titleBubbleStyle = (theme) =>
      css` 
        display: block;
        padding: 10px 20px;
        margin: 20px auto;
        background-color: ${theme.color.accent};
        color: white;
        width: max-content;
        text-align: center;
        max-width: 400px;
        border-radius: 30px;
        cursor: pointer;
        transition: transform 0.5s, box-shadow 0.5s;
        box-shadow: 0 10px 20px transparent;
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 15px rgba(30, 78, 33, 0.257);
          }
        }
      `;


  const suggestionListStyle = css`
    padding: 0 0 20px; // pad the bottom to create room for list items to grow
    margin: 0;
    list-style: none;
    width: 100%;
    text-align: left;
  `;

  const suggestedOptionsStyle = css`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  // const contactTextStyle = css`
  //   font-size: 16px;
  //   color: red;
  //   text-align: center;
  //   padding-bottom: 20px;
  // `;

  function sendMessage(suggestion) {
    onSuggestionClick();
    onSend(suggestion);
  }

  return (
    <><div css={mainBubbleStyle}>
        <div css={titleBubbleStyle}>
        <h2>Frequently Asked Questions</h2>
        </div>
        <div css={suggestedOptionsStyle}>
          <ul css={suggestionListStyle}>
            {trail.map(({ opacity }, index) => (
              <animated.li
                style={{ opacity }}
                css={suggestionBubbleStyle}
                key={suggestions[index]}
                onClick={() => sendMessage(suggestions[index])}
              >{suggestions[index]}
              </animated.li>))}
          </ul>
        </div>
      {/* <animated.p style={animContactStyle} css={contactTextStyle}>{contactText}</animated.p> */}
      </div>
      <div css={mainBubbleStyle}>
        <div css={titleBubbleStyle}>
          <h2>About Swanton Pacific Ranch</h2>
        </div>
        <div css={textBubbleStyle}> 
              <h3>{aboutSPR}</h3>
        </div>
      </div>
      <div css={mainBubbleStyle}>
        <div css={titleBubbleStyle}>
          <h2>About the Creators</h2>
        </div>
        <div css={textBubbleStyle}>
          <h3>Poppy was brought to you by Cal Poly students from many different majors, disciplines, 
            backgrounds. She is still a work in progress, so if you find any issues you would like to 
            report, please contact: Poppy Software Team @ poppyemail@email.com</h3>
        </div>
      </div>
      <div css={mainBubbleStyle}>
        <div css={titleBubbleStyle}>
          <h2>Want to Help?</h2>
        </div>
        <div css={textBubbleStyle}>
          <h3>Poppy needs your help to ensure that she can stay up and running to educate future generations 
            on SPR rich history!</h3>

          <h3>Interested in donating? Contact:
          Jeanine Scaramozzino
          (805) 123 - 4567
          poppyemail@email.com</h3>
        </div>
      </div>
      </>
  );
}
