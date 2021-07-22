fetch("http://3.37.140.20:5000/api/v1/movie/1")
    .then(res => res.json())
    .then(data => {
        const txtTitle = document.createElement('p');
        txtTitle.textContent = data.data.title;
        document.querySelector('.theCrown').innerHTML='';
        const theCrown = document.querySelector('.theCrown');
        //const theCrown = document.getElementsByClassName('theCrown'); <질문>
        theCrown.append(txtTitle);

        const imgWoman = document.createElement('img');
        imgWoman.src = data.data.image;
        document.querySelector('.crownWomanImg').innerHTML = '';
        const crownWomanImg = document.querySelector('.crownWomanImg');
        crownWomanImg.append(imgWoman);
        
        const imgStar = document.createElement('p');
        const imgStar2 = "./image/Star 1.png";
        const imgStar3 = "./image/Star 5.png";
        const star = document.querySelector('.star');
        document.querySelector('.star').innerHTML = '';
        
        switch (data.data.star){
            case 1: 
            star.innerHTML = `
                    <img src="${imgStar2}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                `;
        break;
            case 2:
                star.innerHTML = `
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                `;
            case 3:
                star.innerHTML = `
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar3}">
                    <img src="${imgStar3}">
                `;
            case 4:
                star.innerHTML = `
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar3}">
                `;
                break;
            default:
                star.innerHTML = `
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                    <img src="${imgStar2}">
                `;
        }
        
        

        const txtYear = document.createElement('p');
        txtYear.textContent = data.data.year;
        document.querySelector('.date').innerHTML='';
        const date = document.querySelector('.date');
        date.append(txtYear);

        const txtSeason = document.createElement('p');
        document.querySelector('.season').innerHTML = '';
        txtSeason.textContent = data.data.season + " Season";
        const season = document.querySelector('.season');
        season.append(txtSeason);

        const txtQual = document.createElement('p');
        txtQual.textContent = data.data.quality;
        document.querySelector('.ultra').innerHTML = '';
        const ultra = document.querySelector('.ultra');
        ultra.append(txtQual);

        const txtDes = document.createElement('p');
        txtDes.textContent = data.data.description;
        document.querySelector('.explain').innerHTML = '';
        const explain = document.querySelector('.explain');
        explain.append(txtDes);

        const txtCurrent = document.createElement('p');
        txtCurrent.textContent = "Play " + data.data.current_see;
        document.querySelector('.buttons4').innerHTML = '';
        const buttons4 = document.querySelector('.buttons4');
        buttons4.append(txtCurrent);

    }).catch(error => { console.log(error)} )


    