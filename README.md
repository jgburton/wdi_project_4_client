![ga](https://cloud.githubusercontent.com/assets/20629455/23824362/2c9817c2-066d-11e7-8988-7b1eefc6d628.jpg)
![wdi](https://cloud.githubusercontent.com/assets/20629455/23824363/2ddeaa7e-066d-11e7-8630-f7c890c9f1c1.png)

___
<br>

## Project 4
###Remote Composer - Duo Project - FullStack App
An open source music composition platform, for composers and musicians who want to collaborate and develop ideas together. 

### **Technology**

This FullStack app was built using a PostgreSQL database on a Ruby on the Rails Backend, with Angular JS on the Frontend and Bootstrap for CSS. I also integrated the FileStack API to provide online data storage for the audio upload and download features. We used git for version and colaboration control.

##Methodology
 
### **THE PROBLEM**
A composer may often come up with a short phrase or 'idea' and not develop it. They may throw it away or forget about it due to lack of interest, inspiration or time. Maybe they won't even record the 'idea'. The potential of that 'idea', is then no more.

### **THE SOLUTION**
To solve this problem we decided to create a platform for composers to upload their unfinished ideas, with the intention of other composers being able to contibute to that 'idea' and result in a colaborative composition.

### **NAME & BRANDING**
The project has a title of 'RemoteComposer'. Providing a way of eliminating artistic block - and collaborating - with musicians worldwide - to create beutiful ideas.

### **Models & Relationships**

####User ---------------< Ideas --------------< Additions<br>

A user can add an orginal 'idea', or an contribute an 'addition' to an existing 'idea'.

####User
name<br>
photo<br>
ideas<br>

####Idea
name<br>
user_id<br>
instruments<br>
blurb<br>
sound_url<br>
addition<br>

####Addition
user_id<br>
idea_id<br>
instruments<br>
blurb<br>
sound_url<br>
addition<br>


## User Journey
##### Log in/register
Standard jwt authentication process. Angular/Ruby on rails stack.
![](http://i.imgur.com/uOVnl1h.png)

##### 1. Select instrument
Browse through various audio files for selected instrument.

Listen to audio files.

Download audio file you like the sound of.

![](http://i.imgur.com/3sdIHq0.png)

##### 2. Add to composition
Once the audio file is downloaded, the user can click and drag this into their DAW(digital audio workstation) as an mp3. They then add another instrument or layer of sound to the idea. Export this instrumental idea as a layer in mp3/wav format.

##### 3. Upload Addition Instrument

This mp3 is then uploaded to the platform in addition to the original track.

![](http://i.imgur.com/JYcS5ey.png)

![](http://i.imgur.com/eB1J9dM.png)

##### 4. Additions

The user can then play a combination of additions simultaneously with the original idea OR download the individual additions and original idea to then combine into one complete audio file.

![](http://i.imgur.com/zpLKtMW.png)

### **Requirements of API**

* User data, original idea data and addition data.


#### MVP 'nice to haves' - additional
* Commenting system or chat feature
* Incooperating google maps API


### **Visual Representation**

Idea: Piano Motif - User 1

Original Track [Play] [Download]<br>
[checkbox] Violin - User 2<br>
[checkbox] Guitar - User 3<br>
[checkbox] Cello - User 4<br>
[checkbox] Bass - User 5<br>

###Must:
* The ability to download all individually as audio files. <br>
* To play selected instruments simultaneously with the original idea.<br>
* To not include instruments of choice.<br>
* The ability to upload an instrument track.

###The completed app is deployed on Heroku:
https://remotecomposer.herokuapp.com/

##Reflection

###Wins

It was my second experience working in a team, but first opportunity working with Ruby on Rails for the backend code. This provided lots of challenges which we worked through together by research and tutorials.

Working in a duo proved exceptionally efficient and I project managed our progress using trello. We communicated in person when pair programming and via slack otherwise.

Reaching MVP within 2 days of coding giving us time for styling and preparation of original audio for the app. It was a pleasure to combine my background in music with building an application.


###Future Improvements: Implementing an email notification system for when additions are contributed to your original idea.

Implementing an email notification system for when additions are contributed to your original idea.

Implementing a request for addition and approval system.
