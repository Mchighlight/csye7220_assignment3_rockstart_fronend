import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import getSong from '../../api/song'
import 'github-markdown-css'

const StrongerPage =  () => {
  let strongerLyric =  getSong('Stronger');
   // Reading data from the 'file.txt' file

  return (

    
    <Paper>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={`Kanye West-Stronger`}
            escapeHtml={true}
          />
        </div>

        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={strongerLyric}
            escapeHtml={true}
          />
        </div>


    </Paper>
  )
}
export default StrongerPage
