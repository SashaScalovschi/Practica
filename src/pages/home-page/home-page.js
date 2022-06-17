import React from 'react';
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/doom2.jpg',
        title: 'Doom 2',
        genres: ['Экшен', 'Шутер'],
        game1:'https://archive.org/embed/Doom-2',
        id: 1,
        description: "Doom II: Hell on Earth — відеогра, шутер від першої особи, розроблена компанією id Software, випущена для IBM PC 10 жовтня 1994 року. Є продовженням популярної і революційної гри Doom, яка вийшла в світ роком раніше. ",
        
    },
    {
        image: '/game-covers/-pac-man.avif',
        title: 'Pac man',
        genres: ['Экшен', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Ms._Pac-Man_1983',
        id: 2,
        description: "Легендарна гра яку знеає кожена людина!!! Pac-Man — відеогра, яка вперше вийшла в 1980 році в Японії. Її випуск змінив всю індустрію відеоігор свого часу і вплинув на різні сфери культури.",
    },
    {
        image: '/game-covers/donkey_kong.png',
        title: 'Donkey Kong',
        genres: ['Платформа', 'Аркада'],
        game1:'https://archive.org/embed/donkey-kong-dos',
        id: 3,
        description: "Donkey Kong — це серія відеоігор, створена Сігеру Міямото. У ньому розповідається про пригоди мавпи на ім'я Donkey Kong та його клану інших мавп і мавп. Франшиза в основному складається з платформних ігор — спочатку ігор-головоломок з одним екраном, а пізніше — платформерів з боковою прокруткою.",
    },
    {
        image: '/game-covers/Super_Mario_World_DX.png',
        title: 'Super Mario World DX',
        genres: [ 'Экшен', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Super_Mario_World_DX_2002',
        id: 4,
        description: "Платформер для DOS лише з 5 рівнями. Дивна думка автора створити гру для DOS у 2002 році, яка потребує принаймні Pentium 233 МГц і має розмір 32 МБ.Якщо ви використовуєте winXP + SP1, то чи цілком можливо, що ви отримаєте помилку. Якщо так, то перегляньте наш розділ поширених запитань, щоб знайти рішення.",
    },
    {
        image: '/game-covers/Rayman.jpg',
        title: 'Rayman',
        genres: [ 'Экшен', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Rayman_1995',
        id: 5,
        description: "Rayman - це франшиза відеоігор на платформі, створена дизайнером відеоігор Мішелем Анселем для Ubisoft. З моменту випуску оригінальної гри Rayman в 1995 році серія випустила 45 ігор на різних платформах.",
    },
    {
        image: '/game-covers/Amazing_Spider-Man.jpg',
        title: 'Amazing Spider-Man',
        genres: [ 'Экшен', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Amazing_Spider-Man_The_1990',
        id: 6,
        description: "На крилах смерті! - 94-й випуск серії Amazing Spider-Man, опублікований видавництвом Marvel Comics 1 березня 1971 року.",
    },
    {
        image: '/game-covers/Tetris.png',
        title: 'Tetris',
        genres: [ 'Strategi', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Tetris_1986',
        id: 7,
        description: "Тетріс — відеогра-головоломка, створена 1984 року російським програмістом Олексієм Пажитновим з колегами. Першу версію було представлено 6 червня 1984 року, коли Олексій працював в ОЦ Академії наук СРСР у Москві. Назву гри автор створив поєднавши грецький префікс «тетра-» зі словом «теніс» — улюбленою грою Пажитнова. ",
    },
    {
        image: '/game-covers/Stunts.jpg',
        title: 'Stunts',
        genres: [ 'Гонка', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Stunts_1990',
        id: 8,
        description: "Stunts — гоночна гра з 1990 року. Гра була запрограмована групою Distinctive Software (DSI) і спочатку розповсюджувалась у США компанією Brøderbund у версіях 1.0 та 1.1 для ПК. У той же час Mindscape випустила ту ж гру в Європі під назвою 4D Sports Driving у версіях 1.1",
    },
    {
        image: '/game-covers/NASCAR_Racing.jpg',
        title: 'NASCAR Racing',
        genres: [ 'Гонка', 'Аркада'],
        game1:'https://archive.org/embed/msdos_NASCAR_Racing_1994',
        id: 9,
        description: "NASCAR Racing — це серія відеоігор про перегони автомобілів, спочатку розроблених Papyrus Design Group у 1990-х роках. Серія почалася в 1994 році і завершилася випуском NASCAR Racing 2003 Season в 2003 році.",
    },
    {
        image: '/game-covers/Golden_Axe.png',
        title: 'Golden Axe',
        genres: [ 'Платформер', 'Аркада', 'Сюжет'],
        game1:'https://archive.org/embed/msdos_Golden_Axe_1990',
        id: 10,
        description: "Golden Axe - це серія побічних аркадних відеоігор, розроблених Sega. Дія серіалу відбувається в середньовічному фантастичному світі, де кілька героїв мають завдання відновити легендарну Золоту сокиру, головний елемент серіалу.",
    },
    {
        image: '/game-covers/TheLionKing.jpg',
        title: 'The Lion King',
        genres: [ 'race', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Lion_King_The_1994',
        id: 11,
        description: "The Lion King — це платформова гра, заснована на анімаційному фільмі Disney The Lion King 1994 року. Гра була розроблена Westwood Studios та опублікована Virgin Interactive Entertainment для Super NES і Genesis у 1994 році, і була портована на MS-DOS, Amiga, Game Gear, Master System і Nintendo Entertainment System.",
    },
    {
        image: '/game-covers/Mario_&_Luigi.png',
        title: 'Mario & Luigi (1994)',
        genres: [ 'race', 'Аркада'],
        game1:'https://archive.org/embed/marioandluigi_202103',
        id: 12,
        description: "Гра була створена Майком Вієрінг як клон глобально відомої гри Super Mario Brothers. За його розповідями, він створив цю гру лише з метою практики у програмуванні графіки VGA, тобто у особистих цілях. Він хотів використати зароблені ним навички в інших, більш вишуканих іграх. Складно навіть передбачити його реакцію у момент зустрічі своєї гри на полицях магазинів. Сама гра складається із шести рівнів. Вражає те, як автор помістив такого рівня графіку в абсолютно мізерний файл гри.",
    },
    {
        image: '/game-covers/Empire_Deluxe.png',
        title: 'Empire Deluxe',
        genres: [ 'Екшн', 'Аркада', 'Платформер'],
        game1:'https://archive.org/embed/msdos_Empire_Deluxe_1993',
        id: 13,
        description: "Empire Deluxe Combined Edition — це остання в класичній серії ігор Empire, яка охоплює майже п’ять десятиліть. Empire Deluxe - це гра про захоплення міст. Починаючи лише з одного, місто дає можливість командиру виробляти одиниці. Ці підрозділи, у свою чергу, можуть безпосередньо атакувати або підтримувати атаку більшої кількості міст.",
    },
    {
        image: '/game-covers/Indiana_Jones.jpg',
        title: 'Indiana Jones and The Last Crusade',
        genres: [ 'Головоломка', 'Аркада'],
        game1:'https://archive.org/embed/msdos_Empire_Deluxe_1993',
        id: 14,
        description: "Indiana Jones and the Last Crusade: The Action Game була опублікована в 1989 році Lucasfilm Games за мотивами однойменного фільму. Гра була випущена для ZX Spectrum, Amstrad CPC, Commodore 64, Atari ST, Amiga, IBM PC, MSX, Master System, NES, Game Boy, Sega Genesis і Game Gear.        Це інша гра від Indiana Jones and the Last Crusade: The Graphic Adventure, також випущеної в 1989 році. Для Nintendo Entertainment System також є інша гра під назвою Indiana Jones and the Last Crusade, випущена Taito в 1991 році.",
    },
    {
        image: '/game-covers/PGA_Tour_Golf.jfif',
        title: 'PGA Tour Golf',
        genres: [ 'Спорт', 'Аркада'],
        game1:'https://archive.org/embed/msdos_PGA_Tour_Golf_1990',
        id: 15,
        description: "PGA Tour Golf - це серія відеоігор для гольфу, розроблена та опублікована Electronic Arts - а згодом і їхнім підзаписом EA Sports - з 1990 року. Серія насамперед містить курси, представлені на американському PGA Tour, та інші визначні курси. У 1998 році EA почав публікувати свої ігри з гольфу з схваленням Тайгер Вудс.",
    },
 
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}
