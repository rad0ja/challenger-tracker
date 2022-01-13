export default function getData(url) {
    fetch(url)
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            } else {
                throw new Error('error')
            }
        })
        .then((responseData) => {
            console.log(responseData)
            document.getElementById('wins').textContent = responseData.wins
            document.getElementById('losses').textContent = responseData.losses
            document.getElementById('rankTier').textContent = responseData.rank
            document.getElementById('points').textContent = responseData.leaguePoints
            document.getElementById('summonerName').textContent = responseData.summonerName
            const currentTier = responseData.tier
            switch (currentTier) {
                case 'IRON':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emblem_Iron.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-thumbs-down fa-9x')
                    break;
                case 'BRONZE':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emblem_Bronze.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-sad-tear fa-9x')
                    break;
                case 'SILVER':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emblem_Silver.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-meh fa-9x')
                    break;
                case 'GOLD':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emblem_Gold.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-smile fa-9x')
                    break;
                case 'PLATINUM':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emlbem_Platinum.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-surprise fa-9x')
                    break;
                case 'MASTER':
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/Emblem_Master.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-laugh-beam fa-9x')
                    break;
                default:
                    document.getElementById('rank').setAttribute('src', './ranked-emblems/provisional.png')
                    document.getElementById('emote').setAttribute('class', 'far fa-lauh-squint fa-9x')
            }
        })
}