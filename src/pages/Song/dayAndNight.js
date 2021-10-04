import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import getSong from '../../api/song'
import 'github-markdown-css'

const DayAndNightPage =  () => {
  let dayAndNightLyric =  getSong('DayAndNight');
   // Reading data from the 'file.txt' file

  return (

    
    <Paper>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={`Kid Cudi -Day and Night`}
            escapeHtml={true}
          />
        </div>

        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={dayAndNightLyric}
            escapeHtml={true}
          />
        </div>


    </Paper>
  )
}
export default DayAndNightPage
