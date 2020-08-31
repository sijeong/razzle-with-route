import {parse} from 'node-html-parser'

const src = '<ul id="list"><li id="x">Hello</li></ul>'
const root = parse('<ul id="list"><li id="x">Hello</li></ul>')

console.log(root)

// @ts-ignore
const first = root.firstChild.structure

console.log(first)

// @ts-ignore
console.log(root.querySelector('#x'))



// import BeautifulDom from 'beautiful-dom'
const BeautifulDom = require('beautiful-dom')

const dom = new BeautifulDom(src)
console.log(dom)

console.log(dom.getElementsByTagName('li'))


import tsdom from 'tsdom'
