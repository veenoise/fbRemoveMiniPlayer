# FB Remove Miniplayer

#### Video Demo: <https://www.youtube.com/watch?v=HY-rOnFMpO8>

#### Description:

This is a web extension that disables the miniplayer feature on Facebook. Facebook videos automatically use miniplayer after 5 seconds of you watching a video and then scrolling. Enabling this extension removes the hassle of exiting videos each time it pop-ups.

#### How does it work?

Using the MutationObserver, we can see when things change to the parent element `div.x9f619.x1n2onr6.x1ja2u2z`
With the only parameter, `childList`, we will observe things when the parent element adds or removes a node.
If the desired event is triggered, the opening of miniplayer, a new node will be added. But, we do not want that node to be added. We remove the node using `removeChild()` and the parameter is the child element `div.xal61yo.x1jn9clo.x2c8kfy.x78zum5.x164qtfw.xl56j7k.xz65tgg.xixxii4.xxsgkw5`

#### Instructions:

1. Download the zip of this repository.
2. Extract the file.
3. Enable the extension:
    1. View all extensions
    2. Manage extensions
    3. Load unpacked
    4. Select the folder 
    5. Make sure it is activated
