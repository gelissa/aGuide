import React from "react";
import Title from "../components/Title/Title";
import SubTitle from "../components/SubTitle/SubTitle";
import ResourceCard from "../components/ResourceCard/ResourceCard";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import contacts from "../data/contactDB.json"

class Resources extends React.Component{
  state ={
    contacts
  }
  render(){
  return (
    <div className="container-fluid">
      <Title>Resources</Title>
      <section className="intro_resources text-center">
        <p>
          <i>
            For those of you on the ground, it is vital that you protect
            yourselves in the moment. If you must take your phone, stay off of
            social media and turn off your location.
          </i>
        </p>
      </section>

  {/* all links to resources */}
      <section className="links">
        {/* aid links */}
        <div className="row">
          <div class="col-md-4">
            <ResourceCard header={"Aid"}>
              <SubTitle>
                <a href="https://twitter.com/FeelingFisky/status/1266938529646407680" target="_blank" rel="noopener noreferrer">
                  HOW TO INTERVENE AS A BYSTANDER
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Aid"}>
              <SubTitle>
                <a href="https://twitter.com/FeelingFisky/status/1266938529646407680?s=20" target="_blank" rel="noopener noreferrer">
                  HOW TO INTERVENE AS A BYSTANDER
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Aid"}>
              <SubTitle>
                <a href="https://twitter.com/riyakatariax/status/1266856139536207872" target="_blank" rel="noopener noreferrer">
                  Pro-Bono Lawyers
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
        </div>

        {/* Petition links */}
        <div className="row">
          <div class="col-md-4">
            <ResourceCard header={"Petition"}>
              <SubTitle>
                <a href="https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd" target="_blank" rel="noopener noreferrer">
                  JUSTICE FOR GEORGE FLOYD
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Petition"}>
              <SubTitle>
                <a href="https://www.change.org/p/us-senate-hands-up-act" target="_blank" rel="noopener noreferrer">
                  HANDS UP ACT PETITION
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Petition"}>
              <SubTitle>
                <a href="https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website" target="_blank" rel="noopener noreferrer">
                  #JUSTICEFORBRE
                </a>
              </SubTitle>
            </ResourceCard>
          </div>
        </div>
      
        {/* Google Doc */}
        <div className="row">
          <div class="col-md-4">
            <ResourceCard header={"Docs"}>
              <SubTitle>
              <a href="https://docs.google.com/document/d/1-V7A4tFdP8tPKrsCSyhef5pzqCOK-snLIA7AGMCg0_Q/edit" target="_blank" rel="noopener noreferrer">JUSTICE FOR GEORGE FLOYD</a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Docs"}>
              <SubTitle>
              <a href="https://docs.google.com/spreadsheets/d/13QiTKw3jEzWgF2p3Xj1uPDWmBM4Z6wj6lWQ7sDygO2g/edit#gid=0" target="_blank" rel="noopener noreferrer">SPREADSHEET TO SUPPORT ANTI-RACIST ACTION</a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Docs"}>
              <SubTitle>
              <a href="https://docs.google.com/document/d/1yxj0kSC2-LzINUlfNMEV_Qi-7ZtWCTLSua3Z-9XFNqA/edit" target="_blank" rel="noopener noreferrer">2020 BLM RESOURCE GUIDE</a>
              </SubTitle>
            </ResourceCard>
          </div>
        </div>
      
      {/* Abolitionist Reading */}
      <div className="row">
          <div class="col-md-4">
            <ResourceCard header={"Abolitionist Reading"}>
              <SubTitle>
              <a href="https://becauseweveread.com/index.php/book/prisons-police-abolition/" target="_blank" rel="noopener noreferrer">#BecauseWe'veRead</a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Abolitionist Reading"}>
              <SubTitle>
              <a href="http://transformharm.org" target="_blank" rel="noopener noreferrer">TRANSFORM HARM</a>
              </SubTitle>
            </ResourceCard>
          </div>
          <div class="col-md-4">
            <ResourceCard header={"Abolitionist Reading"}>
              <SubTitle>
              <a href="http://www.usprisonculture.com/blog/transformative-justice/" target="_blank" rel="noopener noreferrer">PRISON CULTURE</a>
              </SubTitle>
            </ResourceCard>
          </div>
        </div>
      </section>
    
    <hr/>
    <section className="unlawfulArrest text-center">
     <h2>Unlawful Arrest Helpline</h2>
  

     <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">City</th>
      <th scope="col">Number</th>
    </tr>
  </thead>
  <tbody>
    {this.state.contacts.map(contact => (
      <tr>
        <td>{contact.city}</td>
    <td>{contact.number}</td>
      </tr>
    ))}
   
  </tbody>
</table>
    </section>

    <hr />
      <section class="map text-center">
      <h2>MAP OF WORLD-WIDE PROTESTS</h2>
      <iframe src="https://www.google.com/maps/d/embed?mid=1W3fsF5-Mz3_KaBgVt2pU8BDY5GkawUN_" title="MAP OF WORLD-WIDE PROTESTS"></iframe>
    </section>

<hr />
    {/* tweets */}
    <section className="tweets text-center">
    <h2>Tweet for relevant information</h2>
        <div className="row">
          <div className="col">
            <TwitterTweetEmbed
              tweetId={"1266245501290078208"}
              options={{ width: 400, height: 400 }}
            />
          </div>
         <div class="col">
            <div className="centerContent">
              <div className="selfCenter standardWidth">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="MNWFPC"
                  options={{ width: 400, height: 400 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <TwitterTweetEmbed
              tweetId={"1266556294732877824"}
              options={{ width: 400, height: 400 }}
            />
          </div>
          <div className="col">
            <TwitterTweetEmbed
              tweetId={"1266427320988033035"}
              options={{ width: 400, height: 400 }}
            />
          </div>
        </div>
      </section>
    
    </div>
  );
}
};

export default Resources;
