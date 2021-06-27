module.exports = {
    name: 'help',
    description: 'Showing commands',
    async execute(message, args) {
      message.reply(`
        Поддерживаемые комманды:

        **/hi** - Приветствие

        **/play <название>**  - Начать проигрывание стрима ( надо быть поключенным к каналу )

        **/leave** - Покинуть канал ( остановить проигрывание )

        **/loop** - Воспроизводит стрим бесконечное количество раз

        **/volume <0 - 200>** - Регулирование громкости стрима
      `)
    }
}