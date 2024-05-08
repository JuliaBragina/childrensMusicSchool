
const template = document.querySelector('#template');
const list = document.querySelector('.current-event__events');
const buttonLoadMore1 = document.querySelector('.content__button_size_mobile');
const buttonLoadMore2 = document.querySelector('.content__button_size_desktop');
const databaseNews = {
    array: [
    {
      "data": "27.10.2023",
      "title": "Юная звезда в детской музыкальной школе",
      "text": "В этот вечер на сцене нашей школы выступит молодой виртуоз, который уже завоевал сердца аудитории своим удивительным мастерством. Этот талантливый музыкант поразит вас своим уровнем мастерства и эмоциональной глубиной исполнения.",
      "link": "./img/content/pexels-pavel-danilyuk-7520794.jpg",
    },
    {
      "data": "25.10.2023",
      "title": "Хор мальчиков подготовил удивительное шоу",
      "text": "Мальчишеский хор под руководством талантливого дирижера готовит свое первое выступление с новой программой. В ней звучат классические хоровые произведения, а также современные композиции",
      "link": "./img/content/pexels-cottonbro-7567337.jpg",
    },
    {
      "data": "22.10.2023",
      "title": "Виртуозное выступление в игре в две руки",
      "text": "Ученики нашей школы продемонстрировали свое виртуозное мастерство в игре на музыкальных инструментах в две руки. От классических сочинений до современных хитов, каждый номер был наполнен уникальным талантом и неподдельной страстью к музыке.",
      "link": "./img/content/pexels-shvetsa-11368518.jpg",
    },
    {
      "data": "20.10.2023",
      "title": "Репетиции школьного оркестра в разгаре",
      "text": "Наши молодые музыканты неустанно трудятся, готовясь к предстоящему концерту. Это будет концерт, который нельзя пропустить! Приходите и поддержите наших талантливых учеников на их музыкальном пути.",
      "link": "./img/content/pexels-shvetsa-11368508.jpg",
    },
    {
      "data": "27.10.2023",
      "title": "Юная звезда в детской музыкальной школе",
      "text": "В этот вечер на сцене нашей школы выступит молодой виртуоз, который уже завоевал сердца аудитории своим удивительным мастерством. Этот талантливый музыкант поразит вас своим уровнем мастерства и эмоциональной глубиной исполнения.",
      "link": "./img/content/pexels-pavel-danilyuk-7520794.jpg",
    },
    {
      "data": "25.10.2023",
      "title": "Хор мальчиков подготовил удивительное шоу",
      "text": "Мальчишеский хор под руководством талантливого дирижера готовит свое первое выступление с новой программой. В ней звучат классические хоровые произведения, а также современные композиции",
      "link": "./img/content/pexels-cottonbro-7567337.jpg",
    },
    {
      "data": "22.10.2023",
      "title": "Виртуозное выступление в игре в две руки",
      "text": "Ученики нашей школы продемонстрировали свое виртуозное мастерство в игре на музыкальных инструментах в две руки. От классических сочинений до современных хитов, каждый номер был наполнен уникальным талантом и неподдельной страстью к музыке.",
      "link": "./img/content/pexels-shvetsa-11368518.jpg",
    },
    {
      "data": "20.10.2023",
      "title": "Репетиции школьного оркестра в разгаре",
      "text": "Наши молодые музыканты неустанно трудятся, готовясь к предстоящему концерту. Это будет концерт, который нельзя пропустить! Приходите и поддержите наших талантливых учеников на их музыкальном пути.",
      "link": "./img/content/pexels-shvetsa-11368508.jpg",
    }
  ]
}

let displayedItems = 0;
const itemsPerPage = 3;

function loadMore() {
  const itemsToShow = databaseNews.array.slice(displayedItems, displayedItems + itemsPerPage);
  itemsToShow.forEach(element => {
    const item = template.content.cloneNode(true);
    item.querySelector('.event-main__time').textContent = element.data;
    item.querySelector('.event-main__title').textContent = element.title;
    item.querySelector('.event-main__text').textContent = element.text;
    item.querySelector('.event-main__imgEvent').src = element.link;
    list.append(item);
  });

  displayedItems += itemsPerPage;
  if (displayedItems >= databaseNews.array.length) {
    buttonLoadMore1.style.display = 'none';
    buttonLoadMore2.style.display = 'none';
  }
}

buttonLoadMore1.addEventListener('click', loadMore);
buttonLoadMore2.addEventListener('click', loadMore);
loadMore();
