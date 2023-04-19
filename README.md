# FB Remove Miniplayer

#### Video Demo: <https://www.youtube.com/watch?v=HY-rOnFMpO8>

#### Description:

Facebook is a versatile and widely used application that allows users to share pictures and videos with their friends and family. Among the variety of features it offers, one particularly useful feature is the miniplayer. This feature can come in handy for those who want to efficiently multitask, as it allows you to read other content on the app while watching or listening to a video simultaneously. However, currently, there is no option or button available to disable the miniplayer, and it is enabled by default. Therefore, users have to make do with this feature unless they choose to use alternative methods to disable it.

The miniplayer feature on Facebook is certainly useful, but there are cases where disabling it can be preferred. For instance, if a user finds the previous video content uninteresting, they may prefer to scroll to the next content rather than being forced to watch the same video again on the miniplayer. Additionally, low-end devices experience lag when attempting to close the miniplayer, making it an inconvenience for users. These reasons highlight why some Facebook users may choose to disable the miniplayer feature.

This web extension was specifically designed by me to disable the miniplayer featured on Facebook. It provides a solution for users who are tired of clicking the exit button for each video they watch, and as a result, it significantly enhances the overall user experience. With this extension, you can enjoy uninterrupted browsing without any distractions or unnecessary effort on your part.

#### How does it work?

Previously, an event listener was utilized to monitor alterations occurring within the Document Object Model. However, this approach has since become deprecated, leading to a transition towards using the MutationObserver method instead, as advised by Mozilla. The MutationObserver method has been adopted as a replacement after the older method proved to be outdated. This switch allows for the continued monitoring of changes made to the Document Object Model without any issues.

The idea behind the code remains the same, as it intends to monitor changes occurring in a particular element and modify it accordingly. To achieve this goal, an object named `MutationObserver` has been defined, which accepts entries as its parameter. Outside the declaration, the parent element has been initialized with the help of `document.querySelector`, passing in `"div.x9f619.x1n2onr6.x1ja2u2z"`. This will serve as the parent element in which the `observe()` method will take in. Utiling the `observe()` method and passing in the `parent` and `{ childList: true }` parameters, we monitor changes that happens to its childList. Going back to the `MutationObserver` declaration, we declared `targetDiv`, `"div.xal61yo.x1jn9clo.x2c8kfy.x78zum5.x164qtfw.xl56j7k.xz65tgg.xixxii4.xxsgkw5"`, which is intended to be strip off of the parent's div. By employing the if statement, checking the existence of the targetDiv, and using `parent.removeChild(targetDiv)`, the `targetDiv` can be deleted everytime it is found. Upon inspection and trial and error, the removal of targetDiv successfully disables the miniplayer.


#### Instructions:

1. Download the zip file of this repository.
2. Extract the file.
3. Enable the extension:
    1. View all extensions
    2. Manage extensions
    3. Load unpacked
    4. Select the folder 
    5. Make sure it is activated
