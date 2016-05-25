function gen_mail_to_link(lhs,rhs,subject){
   document.write("<AEF=\"mailto");
   document.write(":" + lhs + "@");
   document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/A>");
}
