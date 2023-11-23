This is the Sign-up Form project from the Odin Project. The goal of this project is to create a sign-up page with the below as a reference point and following criteria:


* The project gave creative freedom of design and format.

* Must look nice in different browsers and settings and on different resolutions.

* Password fields must check for a matching password.

* Input fields must be functional and should inform the user of errors or missing fields.

* Given template as a guide:

![Alt text](sign-up-form.png)


***My Project:***


* **Design**

I  modeled my pag similarly to the given template, but added my personal touch on it. I wanted something that was bright and popped out. I also added a number of different font styles for certain sections of the page to make it a little more unique and fun.

For the actual HTML elements and JavaScript, I separated each one so I could separately write scripts and errors for each unique event that may happen while users attempt to fill out the form. Since each input is different, there will be different situations when filling each input out. For example, the phone number will display the error message that the number is invalid until either the field has all 10 digits or it is completely empty.

* **Challenges**

The main challenge was thinking about how to design and organize the elements. I initially wanted to just use JS to create the elements with messages but that created a lot more work for me. I just opted to create the elements but simply hide them all. I was also not sure how to tackle the errors for each field. I tried running a loop but that turned out messy and did not work how I wanted it to. I ended up creating a separate event listener for each input and after a big check for empty fields if the user tried to click the "Create Account" while a required field is empty. Once they fill that field in, the input element will change back to black from red and the message will disappear.