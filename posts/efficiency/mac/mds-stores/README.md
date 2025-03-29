---
sort: 3
title: "关闭mds_stores"
description: ""
date: 2025-02-12 12:23:42
tags: ["MacOS"]
---

# 关闭mds_stores

:::tip
今天发现Nuc8 黑苹果的风扇开机狂转，看了下进程，mds_stores占用120%，搜了下解决办法记录在此
:::

## 执行命令

```shell
# 关闭聚焦索引文件功能
sudo mdutil -a -i off

# 如需开启，执行以下命令
sudo mdutil -a -i on
```

## 参考资料

* [mds-stores-use-high-cpu](https://www.xtplayer.cn/macos/mds-stores-use-high-cpu)
