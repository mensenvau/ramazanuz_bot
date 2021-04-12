module.exports = {
    kiril: {
        start: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ['🗓  Тақвим', '⏳ Бугун'],
                ["📖 Қуръон тиловати ва дарслари"],
                ['💬 Савол-жавоб', '☝️Марузалар'],
                ["Aсмаул ҳусна"],
                ['✍️ Исмга табрик', '⚙️ Созламалар'],
            ],
        },
        lang: {
            inline_keyboard: [
                [{ text: "Кирил", callback_data: "kiril" }, { text: "Лотин", callback_data: "lotin" }],
            ]
        },

        settings: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ['♻️ Aлифбо', '📍 Ҳудудингиз'],
                ['◀️ Орқага'],
            ],
        },

        address: (adr, k = "taqim") => {
            const arr = [];
            for (let i = 0; i < adr.length; i += 2) {
                let a = [];
                a.push({ text: adr[i].namek, callback_data: k + adr[i].id })
                a.push({ text: adr[i + 1].namek, callback_data: k + adr[i + 1].id })
                arr.push(a)
            }
            // arr.push( [{text: "🏢 Menyu", callback_data: "menyu"}])
            return {
                inline_keyboard: arr,
            }
        },
        quron: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ["Қуръон тиловати", "Қуръон дарслари"],
                ["Қуръон китоби"],
                ['◀️ Орқага'],
            ],
        }

    },


    lotin: {
        start: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ['🗓  Taqvim', '⏳ Bugun'],
                ["📖 Qur'on tilovati va darslari"],
                ['💬 Savol-javob', '☝️Maruzalar'],
                ["Asmaul husna"],
                ['✍️ Ismga tabrik', '⚙️ Sozlamalar'],
            ],
        },
        lang: {
            inline_keyboard: [
                [{ text: "Kiril", callback_data: "kiril" }, { text: "Lotin", callback_data: "lotin" }],
            ]
        },

        settings: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ['♻️ Alifbo', '📍 Hududingiz'],
                ['◀️ Orqaga'],
            ],
        },

        address: (adr, k = "taqim") => {
            const arr = [];
            for (let i = 0; i < adr.length; i += 2) {
                let a = [];
                a.push({ text: adr[i].namel, callback_data: k + adr[i].id })
                a.push({ text: adr[i + 1].namel, callback_data: k + adr[i + 1].id })
                arr.push(a)
            }
            // arr.push( [{text: "🏢 Menyu", callback_data: "menyu"}])
            return {
                inline_keyboard: arr,
            }
        },
        quron: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                ["Qur'on tilovati", "Qur'on darslari"],
                ["Qur'on kitobi"],
                ['◀️ Orqaga'],
            ],
        }

    },


}