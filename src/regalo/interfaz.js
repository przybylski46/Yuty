const {
    ContainerBuilder,
    TextDisplayBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    SectionBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

function crearInterfazRegalo() {
    const container = new ContainerBuilder()
        .setAccentColor(13781541)

        .addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL(
                    'https://cdn.discordapp.com/attachments/1533909195609604277/1544956129551847444/1000096416.png?ex=6a9bb585&is=6a9a6405&hm=3ba8a824713fa7dcff632d661f074edfdabe439c54a51df17609f06ee7a39180&'
                )
            )
        )
        .addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL(
                    'https://cdn.discordapp.com/attachments/1533909195609604277/1545217022768586832/image_40.png?ex=6a9b56fe&is=6a9a057e&hm=3b5d799d8e0f55378346ea9ac96e6f59b5e785bbf38aaeadf76f6bcb2ac18ade&'
                )
            )
        )
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(
                '## 𝜗<:hongo:1544960397574938644>𝜚 ⭑ 𝕭𝖎𝖊𝖓𝖛𝖊𝖓𝖎𝖉𝖆 𝖆 𝖊𝖘𝖙𝖊 𝕽𝖎𝖓𝖈𝖔𝖓𝖈𝖎𝖙𝖔 𖧧\n\n' +
                '> **𝙽𝚘 𝚎𝚜 𝚖𝚞𝚌𝚑𝚘, 𝚙𝚎𝚛𝚘 𝚌𝚊𝚍𝚊 𝚍𝚎𝚝𝚊𝚕𝚕𝚒𝚝𝚘 𝚏𝚞𝚎 𝚙𝚞𝚎𝚜𝚝𝚘 𝚊𝚚𝚞𝚒 𝚙𝚎𝚗𝚜𝚊𝚗𝚉𝚍𝚘 𝚎𝚗 𝚝𝚒.** <:caracol:1544960451362689034>'
            )
        )
        .addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL(
                    'https://cdn.discordapp.com/attachments/1533909195609604277/1544974219488657458/IMG_20260903_013335.png?ex=6a9a74de&is=6a99235e&hm=b276989390a7d7c83bca010056da5fd93ea49f483bff821856e57a465a4c2&'
                )
            )
        )
        .addSectionComponents(
            new SectionBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        '# ∘ 𝐒𝐨𝐫𝐩𝐫𝐞𝐬𝐚𝐬'
                    )
                )
            .setButtonAccessory(
                new ButtonBuilder()
                .setCustomId('regalo_menu_sorpresas')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji({
                    id: '1545230789233610893',
                    name: 'unknown',
                    animated: true
                })
            )
        )
        .addSectionComponents(
            new SectionBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        '# ∘ 𝐂𝐚𝐫𝐭𝐚'
                    )
                )
            .setButtonAccessory(
                new ButtonBuilder()
                .setCustomId('regalo_menu_carta')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji({
                    id: '1545230849279266907',
                    name: 'unknown',
                    animated: true
                })
            )
        )
        .addSectionComponents(
            new SectionBuilder()
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        '# ∘ 𝐄𝐱𝐭𝐫𝐚𝐬'
                    )
                )
            .setButtonAccessory(
                new ButtonBuilder()
                .setCustomId('regalo_menu_extras')
                .setStyle(ButtonStyle.Secondary)
                .setEmoji({
                    id: '1545230733239394396',
                    name: 'unknown',
                    animated: true
                })
            )
        )
        .addMediaGalleryComponents(
            new MediaGalleryBuilder().addItems(
                new MediaGalleryItemBuilder().setURL(
                    'https://cdn.discordapp.com/attachments/1533909195609604277/1545217022768586832/image_40.png?ex=6a9b56fe&is=6a9a057e&hm=3b5d799d8e0f55378346ea9ac96e6f59b5e785bbf38aaeadf76f6bcb2ac18ade&'
                )
            )
        );

    return [container];
}

module.exports = {
    crearInterfazRegalo
};
