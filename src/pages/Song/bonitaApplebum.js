import React from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import getSong from '../../api/song'
import 'github-markdown-css'

const BonitaAppleBumPage =  () => {
  let BonitaAppleBumLyric =  getSong('BonitaAppleBum');
   // Reading data from the 'file.txt' file

  return (

    
    <Paper>
        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={`Tribe called quested-Bonita Applebum `}
            escapeHtml={true}
          />
        </div>

        <div style={{ backgroundColor: 'white', padding: 12 }}>
          <ReactMarkdown
            className="markdown-body"
            source={BonitaAppleBumLyric}
            escapeHtml={true}
          />
        </div>


    </Paper>
  )
}
export default BonitaAppleBumPage
