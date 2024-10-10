<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="webmasters" select="1"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>CSS</title>
				<link href="../styles/estilos.css" rel="stylesheet" type="text/css" />
			</head>
			<frameset rows="88,*" cols="*" frameborder="NO" border="0" framespacing="0">
			  <frame src="../marcosuperior.htm" name="topFrame" scrolling="NO"  ></frame>
  				<frameset rows="*" cols="125,*" framespacing="0" frameborder="NO" border="0">
			    <frame src="../izqcapas.htm" name="leftFrame" scrolling="NO" ></frame>
    			<frame src="css1.xsl" name="mainFrame"></frame>
				  </frameset>
					</frameset>
					<noframes></noframes>
			<body>	
				
			</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>