var icat = {
    getIpInfo: function () {
        var fetchUrl = "https://api.ooomn.com/api/ip?apiKey=8c6b0733eb5d679261f4459306619e4a"
        fetch(fetchUrl)
            .then(res => res.json())
            .then(json => {
                var country = json.country;
                var ip = json.ip;
                var province = json.province;
                var city = json.city;
                var isp = json.isp;
                document.getElementById("userAgentIp").textContent = ip;
                document.getElementById("userAgentCountry").textContent = country;
                document.getElementById("userAgentRegion").textContent = province;
                document.getElementById("userAgentCity").textContent = city;
                document.getElementById("userAgentIsp").textContent = isp;
            })
    }
}

var userAgentOS = navigator.userAgentData.platform;
var userBrowser = navigator.userAgentData.brands[0].brand;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("userAgentOS").textContent = userAgentOS;
    document.getElementById("userBrowser").textContent = userBrowser;
});