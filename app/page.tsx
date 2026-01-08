'use client'

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Welcome to Official Hdhub4u WebSite – Free Download HD Movies & TV Shows on HDHub4u. Enjoy Latest Movies from Bollywood, Hollywood, & South Indian" />
<title>HDHub4u Official – Download HD Movies WebSeries & TV Shows</title>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  background: #0a0a0a;
  color: #e0e0e0;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Header Styles */
.primary-header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.navbar {
  padding: 15px 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-brand img {
  height: 50px;
  width: auto;
}

.navbar-toggle {
  background: transparent;
  border: 2px solid #ff6b6b;
  color: #ff6b6b;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  display: none;
}

.navbar-nav {
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
}

.navbar-nav a {
  color: #e0e0e0;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s;
}

.navbar-nav a:hover {
  background: #ff6b6b;
  color: #fff;
}

/* Category Navigation */
.category-navbar {
  background: #16213e;
  padding: 10px 0;
  border-top: 1px solid #2d3748;
}

.category-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 10px 0;
}

.category-links li a {
  display: inline-block;
  padding: 8px 15px;
  background: #1a1a2e;
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 14px;
}

.category-links li a:hover {
  background: #ff6b6b;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255,107,107,0.3);
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #1a1a2e;
  min-width: 200px;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  z-index: 1000;
  margin-top: 5px;
}

.dropdown.open .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu li a {
  display: block;
  padding: 10px 15px;
  color: #e0e0e0;
  text-decoration: none;
  transition: all 0.3s;
}

.dropdown-menu li a:hover {
  background: #ff6b6b;
  padding-left: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-container input {
  padding: 10px 15px;
  background: #1a1a2e;
  border: 2px solid #2d3748;
  border-radius: 5px;
  color: #e0e0e0;
  width: 300px;
  transition: all 0.3s;
}

.search-container input:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 10px rgba(255,107,107,0.3);
}

/* Alert Banner */
.sitewide-notice {
  background: linear-gradient(90deg, rgba(220,38,38,0.2) 0%, rgba(234,88,12,0.2) 100%);
  border: 1px solid rgba(220,38,38,0.3);
  padding: 15px;
  margin: 20px 0;
  border-radius: 8px;
}

.sitewide-notice .closebtn {
  float: right;
  font-size: 24px;
  color: #fbbf24;
  cursor: pointer;
  transition: all 0.3s;
}

.sitewide-notice .closebtn:hover {
  color: #f59e0b;
  transform: scale(1.2);
}

/* Home Categories */
.home-categories {
  margin: 20px 0;
  padding: 15px;
  background: #16213e;
  border-radius: 8px;
}

.home-categories ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}

.home-categories a {
  display: inline-block;
  padding: 8px 15px;
  background: #1a1a2e;
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 5px;
  font-size: 13px;
  transition: all 0.3s;
}

.home-categories a:hover {
  background: #ff6b6b;
  transform: scale(1.05);
}

/* Movie Grid */
.home-wrapper {
  margin: 20px 0;
}

.category-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ff6b6b;
}

.recent-movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.thumb {
  background: #16213e;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.thumb:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255,107,107,0.3);
}

.thumb figure {
  margin: 0;
  position: relative;
}

.thumb img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 2/3;
  object-fit: cover;
}

.thumb-hover {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%);
  opacity: 0;
  transition: all 0.3s;
}

.thumb:hover .thumb-hover {
  opacity: 1;
}

.thumb figcaption {
  padding: 12px;
}

.thumb figcaption p {
  font-size: 13px;
  line-height: 1.4;
  color: #e0e0e0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thumb figcaption a {
  text-decoration: none;
  color: #e0e0e0;
  transition: color 0.3s;
}

.thumb figcaption a:hover {
  color: #ff6b6b;
}

/* Pagination */
.pagination-wrapper {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.pagination {
  display: flex;
  gap: 5px;
  list-style: none;
  align-items: center;
}

.pagination a,
.pagination span {
  padding: 10px 15px;
  background: #16213e;
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s;
}

.pagination a:hover {
  background: #ff6b6b;
}

.pagination .current {
  background: #ff6b6b;
  color: #fff;
}

/* Footer */
.primay-footer {
  background: #16213e;
  padding: 30px 0;
  margin-top: 50px;
  border-top: 2px solid #ff6b6b;
}

.footer-brand {
  margin-bottom: 20px;
}

.footer-brand p {
  color: #9ca3af;
}

.footer-brand span a {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
}

.footer-brand span a:hover {
  text-decoration: underline;
}

#menu-pages {
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

#menu-pages a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

#menu-pages a:hover {
  color: #ff6b6b;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }
  
  .navbar-nav {
    display: none;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
  }
  
  .navbar-nav.active {
    display: flex;
  }
  
  .category-links {
    display: none;
    flex-direction: column;
  }
  
  .category-links.active {
    display: flex;
  }
  
  .recent-movies {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
  }
  
  .search-container input {
    width: 100%;
  }
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.text-right {
  text-align: right;
}

.list-inline {
  display: inline-block;
}
</style>
</head>
<body>

<header class="primary-header">
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" id="menu-toggle">
          <span>☰</span>
        </button>
        <a class="navbar-brand" href="/">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='50'%3E%3Ctext x='10' y='35' fill='%23ff6b6b' font-size='32' font-weight='bold' font-family='Arial'%3EHDHub4u%3C/text%3E%3C/svg%3E" alt="HDhub4u logo">
        </a>
      </div>
      
      <div class="navbar-nav primary-menu" id="nav-menu-links">
        <ul class="nav navbar-nav navbar-left">
          <div class="list-inline primary-links">
            <ul>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">How To Download ?</a></li>
              <li><a href="#">Join Our Group !</a></li>
              <li><a href="#">Movie Request Page</a></li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <div class="navbar-header-custom">
    <nav class="category-navbar">
      <div class="container">
        <div class="left-group">
          <button type="button" class="category-toggle" id="category-menu-toggle">
            <span>☰</span>
          </button>
          
          <ul class="category-links" id="category-links">
            <li><a href="/">HDHub4u Home🏠</a></li>
            <li><a href="#">BollyWood</a></li>
            <li><a href="#">HollyWood</a></li>
            <li><a href="#">Hindi Dubbed</a></li>
            <li><a href="#">South Hindi</a></li>
            <li><a href="#">Web Series</a></li>
            <li><a href="#">18+</a></li>
            <li class="dropdown" id="genres-dropdown">
              <a>GENREs ▼</a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Animation</a></li>
                <li><a href="#">Biography</a></li>
                <li><a href="#">Comedy</a></li>
                <li><a href="#">Crime</a></li>
                <li><a href="#">Drama</a></li>
                <li><a href="#">Documentary</a></li>
                <li><a href="#">Family</a></li>
                <li><a href="#">Fantasy</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Horror</a></li>
                <li><a href="#">Musical</a></li>
                <li><a href="#">Mystery</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Sci-Fi</a></li>
                <li><a href="#">Thriller</a></li>
                <li><a href="#">WAR</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div class="search-container">
          <form method="get" id="searchForm" action="/search.html">
            <div class="input-group">
              <input type="search" name="q" class="form-control" placeholder="Search here..." autocomplete="off">
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
</header>

<section class="container content-wrapper">
  <div class="home-categories">
    <ul class="list-inline">
      <a href="#">18+ [Adult]</a>
      <a href="#">Action</a>
      <a href="#">Adventure</a>
      <a href="#">Biography</a>
      <a href="#">BollyWood</a>
      <a href="#">Comedy</a>
      <a href="#">Crime</a>
      <a href="#">Documentary</a>
      <a href="#">Drama</a>
      <a href="#">Dual Audio</a>
      <a href="#">Family</a>
      <a href="#">Fantasy</a>
      <a href="#">Hindi Dubbed</a>
      <a href="#">History</a>
      <a href="#">HollyWood</a>
      <a href="#">Horror</a>
      <a href="#">Music</a>
      <a href="#">Mystery</a>
      <a href="#">Punjabi</a>
      <a href="#">Romance</a>
      <a href="#">Sci-Fi</a>
      <a href="#">South Hindi Movies</a>
      <a href="#">Thriller</a>
      <a href="#">TV-Shows</a>
      <a href="#">War</a>
      <a href="#">WEB-Series</a>
      <div class="clearfix"></div>
    </ul>
  </div>

  <section class="alert alert-success sitewide-notice">
    <center>
      <div class="alerrt">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">×</span>
        <font color="#ff484f">
          <strong>Avoid FAKE Copies of <a style="color:#ff484f;" href="#"><strong>HDHub4u</strong></a> on Google,</strong>
        </font>
        Always use <a style="color:#0087fc;" href="#"><strong>HDHub4u.Tv</strong></a> With VPN to get Official Domain & Follow us on
        <a style="color:#42c1ff;" href="#"><strong>Discord 📢</strong></a>
        <font color="#ffcc00"> For Latest Updates.</font>
      </div>
    </center>
  </section>

  <section class="home-wrapper thumbnail-wrapper left-wrapper">
    <h2 class="category-name">
      <span>🎬</span>
      <span class="material-text">Latest Releases</span>
    </h2>

    <ul class="recent-movies">
      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/chpWmskl3aKm1aTZqUHRCtviwPy.jpg" alt="TRON: Ares (2025)">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>TRON: Ares (2025) iMAX WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p Dual Audio</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/c15BtJxCXMrISLVmysdsnZUPQft.jpg" alt="Fallout (Season 2)">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Fallout (Season 2) WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p | [EP-04 Added]</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/4rgfq74rY9ZuBixODvLoROEphd2.jpg" alt="Heer Express (2025)">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Heer Express (2025) DS4K WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/65ll0fwaCMDHuD5XMJk4f4Olc5b.jpg" alt="My Penguin Friend">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>My Penguin Friend (2024) WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/fdxf02vUous6fty6O4nollyuo4m.jpg" alt="120 Bahadur">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>120 Bahadur (2025) WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/AaLrOh33YLkK1WLEB8Uml7FL8fm.jpg" alt="Stranger Things">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Stranger Things (Season 5) WEB-DL [Hindi (DD5.1) & English] 4K [VOL-3 | EP-08 Added]</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg" alt="Avatar Fire and Ash">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Avatar: Fire and Ash (2025) HQ-HDTC [Hindi - English - Tamil - Telugu] Multi Audio</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/dtdZ6QhcPyxGhpwamo8W8Yeiguh.jpg" alt="Ikkis">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Ikkis (2026) HDTC [Hindi (CLEAN)] 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/wwTRcagd2QZ36JuFQnWBbXs40YM.jpg" alt="Eko">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Eko (2025) WEB-DL [Hindi (DD5.1) & Malayalam] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/3BbaQMvgcOrikbfxEAG6je8YL0A.jpg" alt="Follow My Voice">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Follow My Voice (2025) WEB-DL [Hindi (DD5.1) & English] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/cJaiGbeezmxM3BDFjzXVUp1uXOE.jpg" alt="Single Salma">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Single Salma (2025) WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>

      <li class="thumb">
        <figure>
          <img src="https://image.tmdb.org/t/p/w342/1AfKrRPRPT0TtCTiK9uyBCgFjZS.jpg" alt="Ek Deewane Ki Deewaniyat">
          <a href="#"><div class="thumb-hover"></div></a>
        </figure>
        <figcaption>
          <a href="#"><p>Ek Deewane Ki Deewaniyat (2025) DS4K WEB-DL [Hindi DD5.1] 4K 1080p 720p & 480p</p></a>
        </figcaption>
      </li>
    </ul>

    <div class="clearfix"></div>

    <div class="col-md-12 justify-content-center pagination-wrapper">
      <div class="pagination-wrap">
        <ul class="pagination">
          <li><span class="page-numbers current">1</span></li>
          <li><a class="page-numbers" href="#">2</a></li>
          <li><a class="page-numbers" href="#">3</a></li>
          <li><span class="page-numbers dots">…</span></li>
          <li><a class="page-numbers" href="#">936</a></li>
          <li><a class="next page-numbers" href="#">Next ▶</a></li>
        </ul>
      </div>
    </div>
  </section>
</section>

<footer class="primay-footer">
  <div class="container">
    <div class="col-sm-6 footer-brand">
      <p>2026 © <span><a href="#" target="_blank">HDHub4u.Tv</a></span> | All Rights Reserved.</p>
    </div>
    <div class="col-sm-6 text-right">
      <div class="menu-pages-container">
        <ul id="menu-pages" class="list-inline">
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Join Our Group !</a></li>
          <li><a href="#">How To Download ?</a></li>
          <li><a href="#">Movie Request Page</a></li>
        </ul>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</footer>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenuLinks = document.getElementById("nav-menu-links");
  const categoryMenuToggle = document.getElementById("category-menu-toggle");
  const categoryLinks = document.getElementById("category-links");

  if (menuToggle && navMenuLinks) {
    menuToggle.addEventListener("click", function(e) {
      e.stopPropagation();
      navMenuLinks.classList.toggle("active");
    });
  }

  if (categoryMenuToggle && categoryLinks) {
    categoryMenuToggle.addEventListener("click", function(e) {
      e.stopPropagation();
      categoryLinks.classList.toggle("active");
    });
  }

  document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", function(e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
      if (!isOpen) {
        dropdown.classList.add("open");
      }
    });
  });

  document.addEventListener("click", function(e) {
    if (categoryLinks && !categoryLinks.contains(e.target) && !categoryMenuToggle.contains(e.target)) {
      categoryLinks.classList.remove("active");
    }
    if (navMenuLinks && !navMenuLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenuLinks.classList.remove("active");
    }
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
  });
});
</script>

</body>
</html>
    `}} />
  )
}