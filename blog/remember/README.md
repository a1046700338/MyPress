---
pageClass: box-page-class
isComment: false
---
<BoxLayout :cardList="photoList" />

<script>
export default {
        data() {
                return {
                        photoList: [
                                {
                                title: 'chatglm',/* 标题 */
                                description: 'ChatGLM 是清华大学的开源项目，其 ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，，具有 62 亿参数。虽说参数在GPT中不算高，但是作为消费级的显卡上进行本地部署就非常实用。',/* 描述 */
                                date: '2023',/* 日期 */
                                imgurl: '../avatar.png',/* 图片地址 */
                                href: 'https://baidu.com/',/* 跳转链接 */
                                },
                                {
                                title: 'chatglm',/* 标题 */
                                description: 'ChatGLM 是清华大学的开源项目，其 ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，，具有 62 亿参数。虽说参数在GPT中不算高，但是作为消费级的显卡上进行本地部署就非常实用。',/* 描述 */
                                date: '2023',/* 日期 */
                                imgurl: '../avatar.png',/* 图片地址 */
                                href: 'https://baidu.com/',/* 跳转链接 */
                                },
                                {
                                title: 'chatglm',/* 标题 */
                                description: 'ChatGLM 是清华大学的开源项目，其 ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，，具有 62 亿参数。虽说参数在GPT中不算高，但是作为消费级的显卡上进行本地部署就非常实用。',/* 描述 */
                                date: '2023',/* 日期 */
                                imgurl: '../avatar.png',/* 图片地址 */
                                href: 'https://baidu.com/',/* 跳转链接 */
                                },
                                {
                                title: 'chatglm',/* 标题 */
                                description: 'ChatGLM 是清华大学的开源项目，其 ChatGLM-6B 是一个开源的、支持中英双语的对话语言模型，，具有 62 亿参数。虽说参数在GPT中不算高，但是作为消费级的显卡上进行本地部署就非常实用。',/* 描述 */
                                date: '2023',/* 日期 */
                                imgurl: '../avatar.png',/* 图片地址 */
                                href: 'https://baidu.com/',/* 跳转链接 */
                                },
                        ],
                }
        }
}
</script>