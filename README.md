Scanjs
======
We scan machines on our network a lot. Over the years the scripts to run these Nessus scans have evolved. Currently we have a script that is written  in Perl that issues scans if you give it an IP. We do not want to change this tool since it works very well and does a lot of writing to databases and other things that we do not feel like re-writing for the sake of it. We do need a way to issue a scan remotely without having to login via SSH. We decided that writing an application in node.js would be a quick way to solve the problem. The code in this project simulates that problem. After getting this working to solve the problem I can see that adding some features to the server and the scan command line tool would make this an even more useful tool (check the Todo section)

Files
=====
client.js
Just a node script to simulate a JSON call from a web page. The idea is that the user will click a link that says 'scan me' or something that will send a Javascript Array of IPs via JSON to the server. 

scan
Just a node script to simulate a legacy command line tool that is a wrapper for issuing Nessus scans given an IP. 

server.js
Node server that accepts JSON input (Arrays) of IPs. It takes the IPs and then calls the scan command line tool to issue the scan. 

Todo
====
- have 'scan' actual to do some kind of service discovery like nmap 
- build in the service discover from 'scan' into the server so you could issue ips and get back the services running on the system
- build an parser for all the registered ports
