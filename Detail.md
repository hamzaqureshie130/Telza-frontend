# css custom adjustments

``` css 

/* cutsom helper */
.icon-wrapper-custom {
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .contact-info, .contact-form {
    padding: 30px;
  }
  .custom-gap{
    gap: 12px;
  }
  a#scrollUp{
    bottom:15px
  }
  .m-top-92{
    margin-top: 92px;
  }
  #whatsapp-float{
     bottom:95px
  }
}

.blog-img {
  width: 300px;
  height: 420px;
  object-fit: cover;
  border-radius: 23px;
}

@media (max-width: 1147px) {
  .blog-img {
    width: 100% !important;
    heigh1343t: 378 !important;
  }
}



/* Dropdown Styles */
.mainmenu .drop {
    position: relative;
}

.mainmenu .drop:hover .dropdown__menu {
    display: block; /* Desktop hover */
}

.dropdown__menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    min-width: 180px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 999;
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown__menu li {
    border-bottom: 1px solid #eee;
}

.dropdown__menu li a {
    display: block;
    padding: 10px 20px;
    color: #333;
    text-decoration: none;
}

.dropdown__menu li a:hover {
    background-color: #f2f2f2;
}
@media (max-width: 768px) {
  a#scrollUp {
    width: 50px;   /* smaller width on mobile */
    height: 50px;  /* smaller height on mobile */
  }
  .mr-icon-sm{
    margin-left: 118px;
  }
}


/* Mobile: relative dropdown */
@media (max-width: 992px) {
    .dropdown__menu {
        position: relative;
        box-shadow: none;
    }
}
/* Dropdown item hover styles */
.dropdown__menu li a:hover {
    background-color: black;  /* Change background color on hover */
    color: #fff;                /* Change text color on hover */
    transition: 0.3s;           /* Smooth transition */
}

/* Optional: add a little padding change for a subtle effect */
.dropdown__menu li a:hover {
    padding-left: 25px;         /* Slide effect on hover */
}

#header-area {
    transition: background-color 0.3s ease;
}

/* Header style after scrolling */
#header-area.scrolled {
    background-color: #255140; /* Change to any green you like */
    
}
/* Header text and links on scroll */

/* Optional: change button background on scroll */
#header-area.scrolled .voopo__btn.white__btn {
    background-color: #ffffff; /* White button background */
    color: #255140;            /* Text in green */
    transition: all 0.3s ease;
}


#serviceSelect {
    background-color: #ffffff;   /* White background */
    color: #495057;              /* Black text */
    border: 1px solid #ccc;      /* Optional border */
    width: 100%;                /* Set desired width */
    height: 45px;                /* Set desired height */
              /* Optional padding */
    border-radius: 5px;          /* Optional rounded corners */
    font-size: 16px;             /* Optional font size */
}

/* Placeholder color */
#serviceSelect option[disabled] {
    color: #888; /* Gray placeholder text */
}

/* Optional: hover and focus effect */
#serviceSelect:focus {
    outline: none;
    border-color: #007bff;      /* Change border color on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
.custom-select:focus {
  border-color: #71FE8F !important; /* Green border */
  box-shadow: 0 0 5px 2px #71FE8F; /* Soft green glow */
  outline: none !important;
}

/* Green text and background hover on options (modern browsers only) */
.custom-select option:hover {
  background-color: #71FE8F !important;
  color: #fff !important;
}

/* Optional: green border on hover for the select box */
.custom-select:hover {
  border-color: #71FE8F;
}

.p-parent{
  position: relative; top: -82px; left: 32px;
}
.init-logo-footer{
 position: relative; top: -42px;
}

@media (max-width: 975px) {
  .p-parent {
    position: relative !important;
    top: -50px !important;
    left: 0 !important;
  }
  .init-logo-footer{
 position: relative; top: 0; left: -22px;
}
.gap-x{
  gap: 12px;
}@media (min-width: 1200px) {
    .container {
        max-width: 100%;
        padding: 0 62px;
    }
}
}

@media (min-width: 1200px) {
    .container {
        max-width: 100%;
        padding: 0 62px;
    }
}
```

## bootstrap class custom 
this is bootstrap class of ``` container``` , wrote in ```style.css``` for custom screen adjustment.
``` css
@media (min-width: 1200px) {
    /* Adjustment of bootstrap class in style.css file */
    .container {
        max-width: 100%;
        padding: 0 62px; /*left and right padding */
    }
}
```