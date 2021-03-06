
import suggestions from "./faqs";
import {aboutSPR, aboutCreators, helpMessage} from "./faqs";
import '../style/faq.css';

// function sendMessage(suggestion){

// }

export default function SuggestedOptions() {
  return (
    <div class="container">
      <div class="row text-white center-block">
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">Suggested Questions</h4>
              <h6>Click on any of the questions to ask Poppy!</h6>
              <div class="btn-group-vertical">
                <button onClick="sendMessage(suggestions[0])" type="button" class="roundbutton">{suggestions[0]}</button>
                <button onClick="sendMessage(suggestions[1])" type="button" class="roundbutton">{suggestions[1]}</button>
                <button onClick="sendMessage(suggestions[2])" type="button" class="roundbutton">{suggestions[2]}</button>
                <button onClick="sendMessage(suggestions[3])" type="button" class="roundbutton">{suggestions[3]}</button>
                <button onClick="sendMessage(suggestions[4])" type="button" class="roundbutton">{suggestions[4]}</button>
                <button onClick="sendMessage(suggestions[5])" type="button" class="roundbutton">{suggestions[5]}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">About Swanton Pacific Ranch</h4>
              <h6><br/>{aboutSPR[0]}<p/><br/>{aboutSPR[1]}</h6>
            </div> 
          </div>
        </div>

        <div class="w-70"></div>

        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">About the Creators</h4>
              <h6><br/>{aboutCreators[0]}<p/>
                  {aboutCreators[1]}<br/>
                  {aboutCreators[2]}</h6>
            </div> 
          </div>
        </div>
        <div class="col" align="center">
          <div class="bubble">
            <div class="card-body">
              <h4 class="card-title">Want to Help?</h4>
              <h6><br/>{helpMessage[0]}<br/>
                  {helpMessage[1]}<p/>
                  {helpMessage[2]}<br/>
                  {helpMessage[3]}
              </h6>
            </div> 
          </div> 
        </div>
      </div>
    </div>
  );
  }
