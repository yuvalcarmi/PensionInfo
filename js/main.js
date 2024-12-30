//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", async function (event) {
    const jsonData = {
        "generators": [
            {
                "id": 1,
                "title": "ביטוח מנהלים",
                "content": "ביטוח מנהלים מתאים לעובדים שכירים ועצמאיים, כולל חיסכון פנסיוני והגנה מפני סיכונים כמו אובדן כושר עבודה ושארים.",
                "link": "https://www.harel-group.co.il/long-term-savings/independent-and-employees/Pages/default.aspx",
                "img": "images/pic4.jpg",
            },
            {
                "id": 2,
                "title": "קרן השתלמות",
                "content": "מוצר חיסכון פטור ממס המשמש גם כקרן להשקעות עתידיות. ניתן למשוך את הכספים לאחר 6 שנים בלבד.",
                "link": "https://www.harel-group.co.il/long-term-savings/study-funds/Pages/default.aspx",
                "img": "images/pic1.jpg",
            },
            {
                "id": 3,
                "title": "פוליסת ביטוח חיים",
                "content": "פוליסת ביטוח המעניקה רשת ביטחון כלכלית למשפחה במקרה של פטירה. כוללת אפשרות לשדרוג כיסויים.\n" +
                    "\n",
                "link": "https://www.harel-group.co.il/Insurance/life/Pages/default.aspx",
                "img": "images/pic7.jpg",
            },
            {
                "id": 4,
                "title": "קרן פנסיה כללית",
                "content": "מיועדת לעמיתים המבקשים חיסכון פנסיוני ללא מרכיבי ביטוח נוספים. פתרון גמיש ומשתלם.",
                "link": "https://www.harel-group.co.il/long-term-savings/pension/funds/reut/Pages/general.aspx",
                "img": "images/pic10.jpg",
            },
            {
                "id": 5,
                "title": "ביטוח אובדן כושר עבודה",
                "content": "מבטח את הכנסתו של המבוטח במקרה שאינו מסוגל לעבוד כתוצאה מתאונה או מחלה.",
                "link": "https://www.harel-group.co.il/Insurance/loss-of-working-ability/Pages/default.aspx",
                "img": "images/pic5.jpg",
            },

            {
                "id": 6,
                "title": "ביטוח סיעודי",
                "content": "כיסוי המעניק עזרה כלכלית למימון טיפולים וסיוע במצב סיעודי, כדי להקל על המבוטח ובני משפחתו.",
                "link": "https://www.harel-group.co.il/Insurance/long-term-care/Pages/default.aspx",
                "img": "images/pic6.jpg",
            },

            {
                "id": 7,
                "title": "תוכנית חיסכון לילדים",
                "content": "מוצר חיסכון לטווח ארוך המיועד להבטחת עתיד כלכלי לילדים, כולל אפשרויות השקעה גמישות.",
                "link": "https://www.harel-group.co.il/long-term-savings/funding-saving-for-children/Pages/default.aspx",
                "img": "images/pic8.jpg",
            },

            {
                "id": 8,
                "title": "ביטוח בריאות פרטי",
                "content": "מעניק כיסוי נרחב לשירותי רפואה פרטיים, כולל טיפולים מתקדמים וניתוחים בארץ ובחו\"ל.",
                "link": "https://www.harel-group.co.il/Insurance/health/Pages/default.aspx",
                "img": "images/pic3.jpg",
            },

            {
                "id": 9,
                "title": "קרן פנסיה לעצמאיים",
                "content": "פתרון ייחודי המותאם לעצמאיים, כולל יתרונות מס ומשיכת כספים גמישה בתנאים מסוימים.",
                "link": "https://www.harel-group.co.il/long-term-savings/pension/information/Pages/guidetoapensionfundforself-employed.aspx",
                "img": "images/pic2.jpg",
            },

            {
                "id": 10,
                "title": "קופת גמל להשקעה",
                "content": "תוכנית חיסכון גמישה המתאימה לכל מטרה עתידית, עם אפשרות לחיסכון קבוע או הפקדות משתנות.",
                "link": "https://www.harel-group.co.il/long-term-savings/funding-saving/information/Pages/saving-for-every-purpose.aspx",
                "img": "images/pic9.jpg",
            },
        ]
    }

    const container = document.getElementById("cardContainer");
    jsonLoop();

    function jsonLoop() {
        jsonData.generators.forEach((generator) => {
            const column = document.createElement("div");
            column.classList.add("col");

            const card = document.createElement("div");
            card.classList.add("card", "h-100");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "d-flex", "flex-column");

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = generator.title;

            const text = document.createElement("p");
            text.classList.add("card-text", "flex-grow-1");
            text.textContent = generator.content;

            const link = document.createElement("a");
            link.href = generator.link;
            link.classList.add("btn", "btn-warning", "mt-auto");
            link.target = "_blank";
            link.textContent = `להצטרפות`;

            const img = document.createElement("img");
            img.src = generator.img;
            img.classList.add("card-img");

            cardBody.appendChild(title);
            cardBody.appendChild(text);
            cardBody.appendChild(link);
            card.appendChild(cardBody);
            card.appendChild(img);
            column.appendChild(card);
            container.appendChild(column);
        });
    }

    const search = document.getElementById("search");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (search.value === "") {
            alert("הזן ערך לחיפוש");
        } else {
            const foundGenerator = jsonData.generators.find(
                (generator) => generator.title === search.value
            );
            if (foundGenerator) {
                console.log("search")
                container.innerHTML = "";
                createGenerator(foundGenerator)
            } else {
                alert("לא מצאנו מה שחיפשת");
            }
        }
    });

    function createGenerator(generator) {
        const column = document.createElement("div");
        column.classList.add("col");
        
        const card = document.createElement("div");
        card.classList.add("card", "h-100");
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");
        
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = generator.title;
        
        const img = document.createElement("img");
        img.src = generator.img;
        img.classList.add("card-img");

        const text = document.createElement("p");
        text.classList.add("card-text", "flex-grow-1");
        text.textContent = generator.content;
        
        const link = document.createElement("a");
        link.href = generator.link;
        link.classList.add("btn", "btn-warning", "mt-auto");
        link.target = "_blank";
        link.textContent = `להצטרפות`;
        
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link);
        card.appendChild(cardBody);
        card.appendChild(img);
        column.appendChild(card);
        container.appendChild(column);
    }

//גלריית תמונות
    const sliderWrapper = document.querySelector(".my-slider-wrapper");
    const slider = sliderWrapper.querySelector(".slider");
    const prevButton = sliderWrapper.querySelector("#prev");
    const nextButton = sliderWrapper.querySelector("#next");
    const slides = sliderWrapper.querySelectorAll(".slider img");

    let currentIndex = 0;

    function updateSlider() {
        const offset = currentIndex * 100;
        console.log(currentIndex);
        console.log(offset)
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
    
    const feedbackContainer = document.getElementById("feedbackCon");
    await createReviews();
    async function createReviews() {
        const url = `https://randomuser.me/api/?gender=female&results=3`;
        const params = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }
        const response = await fetch(url, params);
        if (response.ok) {
            const reviews = {
                "reviews": [
                    {
                        "id": 1,
                        "title": "אתר מדהים!",
                        "content": "הרגשתי שכל מה שחיפשתי היה פה במקום אחד. בזכותכם אני הרבה יותר בטוחה בהחלטות שלי!"
                    },
                    {
                        "id": 2,
                        "title": "אין על התוכן שלכם!",
                        "content": "האתר הפך להיות המקום הראשון שאליו אני פונה כשאני צריכה מידע מקצועי ואמין."
                    },
                    {
                        "id": 3,
                        "title": "שירות מנצח!",
                        "content": "כל כך שמחתי למצוא תוכן מעשי וברור שממש עוזר לי ביום-יום. תודה רבה!"
                    }
                ]
            }
            const data = await response.json();
            data['results'].forEach(person => {
                const column = document.createElement("div");
                column.classList.add("col", "col-lg-4");
                
                const cardDiv = document.createElement('div');
                cardDiv.classList.add("card", "h-100")
                
                const cardBody = document.createElement('div');
                cardBody.classList.add("card-body", "d-flex", "flex-column");
                
                const cardTitle = document.createElement("h4")
                cardTitle.setAttribute('class', 'card-title');
                cardTitle.innerText = `${person.name['first']} ${person.name['last']}`
                
                const randomIndex = Math.floor(Math.random() * reviews.reviews.length);
                
                const selectedReview = reviews.reviews.splice(randomIndex, 1)[0]; 
                
                const feedbackTitle = document.createElement("h5");
                feedbackTitle.classList.add("card-text", "flex-grow-1");
                feedbackTitle.innerText = selectedReview.title;
                
                const feedbackText = document.createElement("p");
                feedbackText.classList.add("card-text", "flex-grow-1");
                feedbackText.innerText = selectedReview.content;
                
                const cardPic = document.createElement('img');
                cardPic.classList.add('card-pic');
                cardPic.src = person.picture['large'];
                
                cardBody.appendChild(cardPic);
                cardBody.appendChild(cardTitle)
                cardBody.appendChild(feedbackTitle);
                cardBody.appendChild(feedbackText);
                cardDiv.appendChild(cardBody);
                column.appendChild(cardDiv)
                feedbackContainer.appendChild(column);
            });

        } else {
            console.log(errors);
        }
    }
        const myModal = new bootstrap.Modal(document.getElementById('info'));
        const contactLink = document.getElementById('contactLink');
        contactLink.addEventListener('click', (event) => {event.preventDefault();myModal.show();
        });
        const sendButton = document.getElementById('sendButton');
        const emailInput = document.getElementById('email');
        const nameInput = document.getElementById('name');
        const surnameInput = document.getElementById('surname');
        const emailError = document.getElementById('emailError');
        const Error = document.getElementById('Error');

        sendButton.addEventListener('click', () => {
        if(nameInput.value === '' || surnameInput.value === '' || emailInput.value === '') {
            Error.style.display = 'block';
            return;
        }
        if (!emailInput.validity.valid) {
            emailError.style.display = 'block';
            return;
        }
        Error.style.display = 'none';
        emailError.style.display = 'none';
        nameInput.value = '';
        surnameInput.value = '';
        emailInput.value = '';
        myModal.hide();
    });

})

