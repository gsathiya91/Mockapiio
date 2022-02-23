const userList = [
  {
    "createdAt": "2022-02-21T09:57:14.768Z",
    "name": "Anna Leuschke",
    "avatar": "https://wallpapercave.com/wp/wp1831319.jpg",
    "id": "1"
  },
  {
    "createdAt": "2022-02-20T11:46:25.880Z",
    "name": "Virginia Smith",
    "avatar": "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg",
    "id": "2"
  },
  {
    "createdAt": "2022-02-20T17:23:20.010Z",
    "name": "Joanna Kihn Sr.",
    "avatar": "https://www.whatsappimages.in/wp-content/uploads/2021/07/Flower-Images-Wallpaper.jpg",
    "id": "3"
  },
  {
    "createdAt": "2022-02-21T06:08:33.961Z",
    "name": "Stacey Gaylord",
    "avatar": "https://cdn.statusqueen.com/mobilewallpaper/thumbnail/Cute-Baby-Girl-Kids-Wallpaper-iPhone-Wallpaper-iphoneswallpapers_com-503.jpg",
    "id": "4"
  },
  {
    "createdAt": "2022-02-20T18:12:04.668Z",
    "name": "George Harris",
    "avatar": "https://i.pinimg.com/736x/a7/b5/bd/a7b5bdbe805de27a799a5e4f39fc7e14.jpg",
    "id": "5"
  },
  {
    "createdAt": "2022-02-20T23:18:47.891Z",
    "name": "Theodore Roob",
    "avatar": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg",
    "id": "6"
  },
  {
    "createdAt": "2022-02-21T00:34:45.516Z",
    "name": "Donald Ruecker",
    "avatar": "https://speckyboy.com/wp-content/uploads/2020/11/high-resolution-4k-desktop-wallpaper-44.jpg",
    "id": "7"
  },
  {
    "createdAt": "2022-02-21T04:13:40.884Z",
    "name": "Pauline Turcotte",
    "avatar": "https://helpdeskgeek.com/wp-content/pictures/2020/03/4k-wallpapers-desktop-best-sites-interfacelift.jpg",
    "id": "8"
  },
  {
    "createdAt": "2022-02-21T05:37:46.165Z",
    "name": "Jermaine Murray",
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoKUQR3tzcofEqAQCyVCLLWFl6RpYTLOXeA&usqp=CAU",
    "id": "9"
  },
  {
    "createdAt": "2022-02-20T12:29:01.231Z",
    "name": "Irma Lakin",
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZO4ce6HKlwD2E4Gxc6OELjUE6_rmIXl1AQ&usqp=CAU",
    "id": "10"
  }
];

function createUser({name, avatar, createdAt}){
    const joinDate = new Date(createdAt).toDateString();
    document.querySelector(".user-list").innerHTML  +=`
<div class="user-container">
<img class="user-pic" src="${avatar}" alt="${name}"/>
<div>
<h3 class="user-name">${name}</h3>
<p class="user-join-date">${joinDate}</h4>
<div>
</div>`;
}
// userList.forEach(user => createUser(user))

function getUsers(){
    fetch("https://62136ddcf43692c9c604517b.mockapi.io/users")
.then(data => data.json())
.then(userList =>{
    userList.forEach(user => createUser(user))
});
}

getUsers();
