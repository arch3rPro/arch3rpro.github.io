import fs from 'fs';
import Parser from 'rss-parser';

let parser = new Parser();

let feeds = [
    // FreeBuf的feed存在解析问题，暂时注释掉
    {url: "https://www.freebuf.com/feed", name: "FreeBuf"},
    {url: "https://www.kali.org/rss.xml", name: "Kali Linux"},
    {url: "https://wechat2rss.xlab.app/feed/19e49fc43c29d227aed74edba9830e7e1c71161e.xml", name: "CT-Stack"},
    {url: "https://www.exploit-db.com/rss.xml", name: "Exploit-DB"},
    {url: "https://wechat2rss.xlab.app/feed/d351be711510e0b7ccbcb275cdfab5c4c7e3e839.xml", name: "嘶吼专业版"},
    {url: "https://infosecwriteups.com/feed", name: "InfoSec"},
    {url: "https://www.jiqizhixin.com/rss", name: "机器之心"},
    {url: "https://feeds.feedburner.com/ruanyifeng", name: "阮一峰"}
];

(async () => {
    let result = [];

    for (let feed_link of feeds) {
        try {
            // 设置超时，避免长时间等待无响应的源
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Request timeout')), 10000);
            });
            
            // 使用Promise.race实现超时控制
            const feed = await Promise.race([
                parser.parseURL(feed_link.url),
                timeoutPromise
            ]);
            
            // 确保feed和feed.items存在
            if (feed && Array.isArray(feed.items)) {
                let data = {
                    name: feed_link.name || feed.title,
                    items: feed.items.map(item => ({
                        name: feed_link.name || feed.title,
                        title: item.title,
                        link: item.link,
                        date: item.isoDate
                    }))
                };
                result.push(data);
                console.log(`成功解析: ${feed_link.name}`);
            } else {
                throw new Error('Invalid feed structure');
            }
        } catch (error) {
            console.error(`Error parsing feed ${feed_link.url} (${feed_link.name}):`, error.message);
        }
    }

    // Write to the file feeds-sub-data.json
    fs.writeFileSync('feeds-sub-data.json', JSON.stringify(result, null, 0));
})();
