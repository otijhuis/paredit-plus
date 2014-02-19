
        Release Notes - Paredit-Plus - Version 0.0.5
                    
<h2>        Sub-task
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-21'>PAREDIT-21</a>] -         Add function to determine pair bounds
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-22'>PAREDIT-22</a>] -         Add function that moves cursor to start or end of pair and before or after pair char
</li>
</ul>
        
<h2>        Bug
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-18'>PAREDIT-18</a>] -         Duplicating form at end of file not working correctly when not followed by newline
</li>
</ul>
            
<h2>        New Feature
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-4'>PAREDIT-4</a>] -         Add command to add newline right before end of current pair
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-19'>PAREDIT-19</a>] -         Add command to add newline right after end of current pair
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-26'>PAREDIT-26</a>] -         Add command to kill everything inside a pair
</li>
</ul>
        

        Release Notes - Paredit-Plus - Version 0.0.4
                            
<h2>        Bug
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-16'>PAREDIT-16</a>] -         Forward/backward delete checks token-type on wrong char
</li>
</ul>
            
<h2>        New Feature
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-9'>PAREDIT-9</a>] -         Add command to duplicate forms and collections entries
</li>
</ul>

Also updated README (thanks Gabriel Horner)

        Release Notes - Paredit-Plus - Version 0.0.3
            
<h2>        Bug
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-12'>PAREDIT-12</a>] -         Paredit-kill not working in between sexps
</li>
</ul>
            
<h2>        New Feature
</h2>
<ul>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-1'>PAREDIT-1</a>] -         Add paredit-forward-delete command
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-2'>PAREDIT-2</a>] -         Add paredit-backward-delete command
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-3'>PAREDIT-3</a>] -         Add ability to determine if a character is escaped
</li>
<li>[<a href='https://81.4.106.141/jira/browse/PAREDIT-11'>PAREDIT-11</a>] -         Check for escaped characters outside of strings as well as comments/strings
</li>
</ul>
        

        Release Notes - Paredit-Plus - Version 0.0.2

- "Paredit Plus: Kill" behaves more like emacs paredit-kill
- Change command names to be more in line with other Light Table commands (e.g. :paredit-plus.join-sexps in stead of :paredit-plus.join.sexps)
- Rename :paredit-plus.wrap.quotes to :paredit-plus.wrap-quote