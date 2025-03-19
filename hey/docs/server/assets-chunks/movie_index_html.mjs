export default `<html><head><link rel="stylesheet" href="styles-LCU7K4PN.css"><style ng-app-id="ng">

[_ngcontent-ng-c3653627233]:root {
  --white-color: #ffffff;
  --black-color: #000000;
  --primary-color: #ff1d50;
  --secondary-color: #2196f3;
  --card-bg: #1c1c1c;
}
body[_ngcontent-ng-c3653627233] {
  font-family: "Poppins", sans-serif;
  background-color: var(--black-color);
  color: var(--white-color);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: antiquewhite;
}
.movie-container[_ngcontent-ng-c3653627233] {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  justify-content: center;
}
.movie-card[_ngcontent-ng-c3653627233] {
  width: 180px;
  height: 350px;
  perspective: 1000px;
  padding-top: 50px;
}
.movie-card-inner[_ngcontent-ng-c3653627233] {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.movie-card[_ngcontent-ng-c3653627233]:hover   .movie-card-inner[_ngcontent-ng-c3653627233] {
  transform: rotateY(180deg);
}
.movie-card-front[_ngcontent-ng-c3653627233], 
.movie-card-back[_ngcontent-ng-c3653627233] {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.movie-card-front[_ngcontent-ng-c3653627233] {
  background-color: var(--card-bg);
}
.movie-card-front[_ngcontent-ng-c3653627233]   img[_ngcontent-ng-c3653627233] {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 3px solid var(--primary-color);
}
.movie-card-back[_ngcontent-ng-c3653627233] {
  background-color: var(--primary-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
}
.movie-details[_ngcontent-ng-c3653627233] {
  padding: 10px;
}
.movie-title[_ngcontent-ng-c3653627233] {
  font-size: 1rem;
  font-weight: 600;
}
.movie-year[_ngcontent-ng-c3653627233] {
  font-size: 0.9rem;
  opacity: 0.8;
}</style><style ng-app-id="ng">

.header-container[_ngcontent-ng-c20008786] {
  width: 100%;
  height: 80px;
  background-color: #fdc827;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-container[_ngcontent-ng-c20008786]   .logo[_ngcontent-ng-c20008786] {
  font-size: 24px;
  font-weight: bold;
  font-family: "Creepster", cursive;
  letter-spacing: 4px;
  margin-left: 40px;
  cursor: pointer;
}
.header-container[_ngcontent-ng-c20008786]   .logout[_ngcontent-ng-c20008786] {
  font-size: 18px;
  font-weight: bold;
  margin-right: 40px;
  cursor: pointer;
}</style></head><body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.2.2" ngh="1" ng-server-context="ssg"><router-outlet></router-outlet><app-movie _nghost-ng-c3653627233="" ngh="0"><app-header _ngcontent-ng-c3653627233="" _nghost-ng-c20008786="" ngh="0"><div _ngcontent-ng-c20008786="" class="header-container"><div _ngcontent-ng-c20008786="" class="logo" jsaction="click:;">Rotten Potatoes</div><a _ngcontent-ng-c20008786="" class="logout" jsaction="click:;">Logout</a></div></app-header><body _ngcontent-ng-c3653627233=""><meta _ngcontent-ng-c3653627233="" charset="UTF-8"><meta _ngcontent-ng-c3653627233="" name="viewport" content="width=device-width, initial-scale=1.0"><title _ngcontent-ng-c3653627233="">Movie Cards</title><link _ngcontent-ng-c3653627233="" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;display=swap"><div _ngcontent-ng-c3653627233="" class="movie-container"><div _ngcontent-ng-c3653627233="" class="movie-card"><div _ngcontent-ng-c3653627233="" class="movie-card-inner"><div _ngcontent-ng-c3653627233="" class="movie-card-front"><img _ngcontent-ng-c3653627233="" src="movie1.jpg" alt="Movie 1"></div><div _ngcontent-ng-c3653627233="" class="movie-card-back"><p _ngcontent-ng-c3653627233="" class="movie-title">Baby John</p><p _ngcontent-ng-c3653627233="" class="movie-year">2025</p></div></div></div><div _ngcontent-ng-c3653627233="" class="movie-card"><div _ngcontent-ng-c3653627233="" class="movie-card-inner"><div _ngcontent-ng-c3653627233="" class="movie-card-front"><img _ngcontent-ng-c3653627233="" src="movie2.jpg" alt="Movie 2"></div><div _ngcontent-ng-c3653627233="" class="movie-card-back"><p _ngcontent-ng-c3653627233="" class="movie-title">Masterpiece</p><p _ngcontent-ng-c3653627233="" class="movie-year">2024</p></div></div></div><div _ngcontent-ng-c3653627233="" class="movie-card"><div _ngcontent-ng-c3653627233="" class="movie-card-inner"><div _ngcontent-ng-c3653627233="" class="movie-card-front"><img _ngcontent-ng-c3653627233="" src="movie3.jpg" alt="Movie 3"></div><div _ngcontent-ng-c3653627233="" class="movie-card-back"><p _ngcontent-ng-c3653627233="" class="movie-title">Dhoom Dhaam</p><p _ngcontent-ng-c3653627233="" class="movie-year">2023</p></div></div></div><div _ngcontent-ng-c3653627233="" class="movie-card"><div _ngcontent-ng-c3653627233="" class="movie-card-inner"><div _ngcontent-ng-c3653627233="" class="movie-card-front"><img _ngcontent-ng-c3653627233="" src="movie4.jpg" alt="Movie 4"></div><div _ngcontent-ng-c3653627233="" class="movie-card-back"><p _ngcontent-ng-c3653627233="" class="movie-title">American Heist</p><p _ngcontent-ng-c3653627233="" class="movie-year">2022</p></div></div></div><div _ngcontent-ng-c3653627233="" class="movie-card"><div _ngcontent-ng-c3653627233="" class="movie-card-inner"><div _ngcontent-ng-c3653627233="" class="movie-card-front"><img _ngcontent-ng-c3653627233="" src="movie5.jpg" alt="Movie 5"></div><div _ngcontent-ng-c3653627233="" class="movie-card-back"><p _ngcontent-ng-c3653627233="" class="movie-title">Makal</p><p _ngcontent-ng-c3653627233="" class="movie-year">2021</p></div></div></div></div></body></app-movie><!--container--></app-root>
<script src="polyfills-KIGPDB5H.js" type="module"></script><script src="scripts-23HNY6EK.js" defer=""></script><script src="main-TSD6R564.js" type="module"></script> 



<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"0":[{"i":"c3653627233","r":1}]}}]}</script></body><!-- <p class="blink" style="padding-bottom: 20px;">Scroll the table to the right to view more details.</p>

<table border="1">
<tbody>
<tr>
<th colspan="3" scope="col"><span style="color: #294a70;">BAMS II</span></th>
<th colspan="3" scope="col"><span style="color: #294a70;">More Details</span></th>
</tr>
<tr>
<td style="text-align: left;" rowspan="2"><span style="color: #000000;">Dravyaguna Vigyan</span></td>
<td style="text-align: left;"><span>Dr. Vidyanand Fanchu Kumbhojkar</span></td>
<td style="text-align: left;"><span style="color: #000000;">Associate Professor &amp; Head of the Department</span></td>
<td><a href="https://sgrayurved.edu.in/wp-content/uploads/2025/01/Kumbhojkar.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr>
<td style="text-align: left;"><span>Sambhaji Patil</span></td>
<td style="text-align: left;"><span style="color: #000000;">Assistant Professor</span></td>
<td><a href="#" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr>
<td style="text-align: left;" rowspan="2"><span style="color: #000000;">Rasa shastra and Bhaishajya Kalpana</span></td>
<td style="text-align: left;"><span>Dr. Shantinath Subhashchandra Bagewadi</span></td>
<td style="text-align: left;"><span style="color: #000000;">Associate Professor</span></td>
<td><a href="https://sgrayurved.edu.in/wp-content/uploads/2025/01/Bagewadi.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr>
<td style="text-align: left;"><span>Dr. Snehal Dhayefule</span></td>
<td style="text-align: left;"><span style="color: #000000;">Assistant Professor</span></td>
<td><a href="https://sgrayurved.edu.in/wp-content/uploads/2025/01/Dhyphule.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr style="height: 24px;">
<td style="text-align: left;" rowspan="2" width="110"><span style="color: #000000;">Rog Nidan Evam Vikruti Vigyan</span></td>
<td style="text-align: left;" width="310"><span>Dr. Bhojraj Arun Chaudhari</span></td>
<td style="text-align: left;" width="358"><span style="color: #000000;">Associate Professor &amp; Head of the Department</span></td>
<td><a href="https://sgrayurved.edu.in/wp-content/uploads/2024/12/Chaudhari.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr style="height: 24px;">
  <td style="text-align: left; width: 303px; height: 24px;"><span>Dr. Dhanesh Kundalik Mali</span></td>
  <td style="text-align: left; width: 339px; height: 24px;"><span style="color: #000000;">Assistant Professor</span></td>
  <td style="width: 115px; height: 24px;"><a href="https://sgrayurved.edu.in/wp-content/uploads/2025/03/Document-Dr-Mali-N.docx" target="_blank" rel="noopener">View Details</a></td>
  </tr>
<tr style="height: 33px;">
<td style="text-align: left; width: 143px; height: 66px;" rowspan="2"><span style="color: #000000;">Agadtantra Evam Vyavahar Ayurved, Vidhi Vaidyak</span></td>
<td style="text-align: left; width: 303px; height: 33px;"><span>Dr. Revansiddha Ramchandra Usturage</span></td>
<td style="text-align: left; width: 339px; height: 33px;"><span style="color: #000000;">Associate Professor &amp; Head of the Department</span></td>
<td style="width: 115px; height: 33px;"><a href="https://sgrayurved.edu.in/wp-content/uploads/2024/12/Usturge.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr style="height: 33px;">
<td style="text-align: left; width: 303px; height: 33px;"><span>Dr. Savita Bhupal Chougule</span></td>
<td style="text-align: left; width: 339px; height: 33px;"><span style="color: #000000;">Assistant Professor</span></td>
<td style="width: 115px; height: 33px;"><a href="https://sgrayurved.edu.in/wp-content/uploads/2024/12/Chougule.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr style="height: 24px;">
<td style="text-align: left; width: 143px; height: 48px;" rowspan="2"><span style="color: #000000;">Swasthavritta</span></td>
<td style="text-align: left; width: 303px; height: 24px;"><span>Dr. Amol Ramesh Velhal</span></td>
<td style="text-align: left; width: 339px; height: 24px;"><span style="color: #000000;">Professor &amp; Head of the Department</span></td>
<td style="width: 115px; height: 24px;"><a href="https://sgrayurved.edu.in/wp-content/uploads/2024/12/Velhal.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
<tr style="height: 24px;">
<td style="text-align: left; width: 303px; height: 24px;"><span>Dr. Sonali Bagle</span></td>
<td style="text-align: left; width: 339px; height: 24px;"><span style="color: #000000;">Assistant Professor</span></td>
<td style="width: 115px; height: 24px;"><a href="https://sgrayurved.edu.in/wp-content/uploads/2025/01/Bagale.pdf" target="_blank" rel="noopener">View Details</a></td>
</tr>
</tbody>
</table> --></html>`;