/**
 * @file
 */

import { defineEventHandler, H3Event, readBody } from 'h3'
// import { access, constants, mkdir, writeFile, unlink } from 'fs/promises'
// @ts-ignore
// import HTMLtoDOCX from 'html-to-docx'
import HtmlToDocx from '@turbodocx/html-to-docx'



export default defineEventHandler(async (event: H3Event) => {

  const htmlString = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Document</title>
        </head>
        <body>
            <h1>Hello world</h1>
        </body>
    </html>`

  return await HtmlToDocx(htmlString)

  // const body = await readBody(event);

  // const options = {
  //   footer: true,
  //   margins: {
  //     bottom: '1cm',
  //     left: '3cm',
  //     right: '1cm',
  //     top: '1cm',
  //   },
  //   pageNumber: false,
  //   font: 'Times New Roman',
  //   fontSize: '11pt'
  // }

  // return await HTMLtoDOCX(
  //   '<p>Test</p>',
  //   undefined,
  //   options
  // )
})
