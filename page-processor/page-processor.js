const jsdom = require('./jsdom-jscore/lib/jsdom.js');
import Readability from './readability/Readability';
//const cheerio = require("cheerio-without-node-native");
//require('./jsdom-bundle.js');
const URL = require('url-parse');
import { NativeModules } from 'react-native';

export const fetchAndProcessPage = (address) => {
    const url = new URL(address);
    const uri = prepareUri(url);

    return new Promise((resolve, reject) => {
        console.log("fetching page...");
        fetchPageHtml(address).then(pageHtml => extractPageContent(pageHtml, uri, resolve, reject));
        //const reader = NativeModules.PageReaderWindows;
        //reader.read(address).then(article => resolve("<!doctype html><html><head><style type='text/css'>body { width: 85%; font-family: 'Segoe UI', 'San Francisco', 'Helvetica'; margin-left: auto; margin-right: auto; overflow-x: hidden; } img { max-width: 85%; }</style></head><body>" + article.Content + "</body></html>"));
    });
}

const prepareUri = (url) => {
    return {
    href: url.href,
    host: url.host,
    prePath: url.protocol + "//" + url.host,
    scheme: url.protocol.substr(0, url.protocol.indexOf(":")),
    pathBase: url.protocol + "//" + 
              url.host + 
              url.pathname.substr(0, url.pathname.lastIndexOf("/") + 1)
    }
}

const fetchPageHtml = (address) => {
    return fetch(address, {
                headers: {
                    'User-Agent': 'HNRabbit/1.0'
                }
            }).then(res => res.text());
}

const extractPageContent = (pageHtml, uri, resolve, reject) => {
    /*const dom = cheerio.load(pageHtml);
    const document = dom.document;

    var images = document.getElementsByTagName("img");
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0]);
    }

    var article = new Readability(uri, document).parse();
    resolve(article.content);*/
    resolve(pageHtml);
    /*jsdom.env(pageHtml, (err, window) => {
            if(err) { reject("Error processing page DOM"); }
            console.log('running Readability...');

            const document = window.document;
            var images = document.getElementsByTagName("img");
            var nodesArray = [].slice.call(images);

            for(var i = 0; i < nodesArray.length; i++) {
                //if(nodesArray[i].parentNode) {
                //    nodesArray[i].parentNode.removeChild(nodesArray[i]);
                //}
                nodesArray[i].style.maxWidth = "85%";
            }

            var article = new Readability(uri, document).parse(); 
            resolve("<!doctype html><html><head><style type='text/css'>body { width: 85%; font-family: 'Segoe UI', 'San Francisco', 'Helvetica'; margin-left: auto; margin-right: auto; overflow-x: hidden; } img { max-width: 85%; }</style></head><body>" + article.content + "</body></html>");
    }
    );*/
}