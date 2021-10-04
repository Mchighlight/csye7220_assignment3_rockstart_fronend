import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import getSong from '../../api/song'
import 'github-markdown-css'


let temp = "123";

function assignValue(newValue){
  // get data from cache
  temp = newValue ;
}


const SongPage =  () => {
  const markdown =  `
  **Kanye West**
  **Stronger**
  Work it, make it, do it
  Makes us harder, better, faster, stronger
  N-now th-that that don't kill me
  Can only make me stronger
  I need you to hurry up now
  'Cause I can't wait much longer
  I know I got to be right now
  'Cause I can't get much wronger
  Man I've been waiting all night now
  That's how long I been on ya
  I need you right now
  Let's get lost tonight
  You could be my black Kate Moss tonight
  Play secretary, I'm the boss tonight
  And you don't give a fuck what they all say, right?
  Awesome, the Christian in Christian Dior
  Damn, they don't make 'em like this anymore
  I ask, 'cause I'm not sure
  Do anybody make real shit anymore?
  Bow in the presence of greatness
  'Cause right now thou hast forsaken us
  You should be honored by my lateness
  That I would even show up to this fake shit
  So go ahead, go nuts, go apeshit
  Specially in my pastel, on my Bape shit
  Act like you can't tell who made this
  New Gospel homie, take six and take this, haters
  N-now th-that that don't kill me
  Can only make me stronger
  I need you to hurry up now
  'Cause I can't wait much longer
  I know I got to be right now
  'Cause I can't get much wronger
  Man I've been waiting all night now
  That's how long I been on ya
  I need you right now
  I need you right now (me likey)
  I don't know if you got a man or not
  If you made plans or not
  If God put me in the plans or not
  I'm tripping, this drink got me saying a lot
  But I know that God put you in front of me
  So how the hell could you front on me?
  It's a thousand yous, there's only one of me
  I'm tripping, I'm caught up in the moment, right?
  'Cause it's Louis Vuitton Don night
  So we gonna do everything that Kan like
  Heard they'd do anything for a Klondike
  Well, I'd do anything for a blonde dyke
  And she'll do anything for the limelight
  And we'll do anything when the time's right
  Uh, baby you're makin' it (harder, better, faster, stronger)
  N-now th-that that don't kill me
  Can only make me stronger
  I need you to hurry up now
  'Cause I can't wait much longer
  I know I got to be right now
  'Cause I can't get much wronger
  Man I've been waiting all night now
  That's how long I been on ya
  I need you right now
  I need you right now
  You know how long I've been on ya?
  Since Prince was on Apollonia
  Since O.J. Had Isotoners
  Don't act like I never told ya
  Don't act like I never told you
  Don't act like I never told you
  Don't act like I never told you
  Don't act like I never told you
  Don't act like I never told you
  Baby, you're making it (harder, better, faster, stronger)
  N-now th-that that don't kill me
  Can only make me stronger
  I need you to hurry up now
  'Cause I can't wait much longer
  I know I got to be right now
  'Cause I can't get much wronger
  Man I've been waiting all night now
  That's how long I been on ya
  I need you right now
  You know how long I've been on ya?
  Since Prince was on Apollonia
  Since O.J. Had Isotoners
  Don't act like I never told ya
  You know how long I've been on ya?
  Since Prince was on Apollonia
  Since O.J. Had Isotoners
  Don't act like I never told ya
  `;


  async function doSomething() {
    let result = await getSong('Stronger');
    console.log(result.toString);
    return result;
  }


  let resData =  doSomething();
  
  //console.log(resData);
  // Reading data from the 'file.txt' file

  return (
    <Paper>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={true}
          />
        </div>

        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={true}
          />
        </div>

        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={markdown}
            escapeHtml={true}
          />
        </div>
    </Paper>
  )
}
export default SongPage
