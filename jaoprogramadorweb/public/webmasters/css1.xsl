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
				<xsl:apply-templates select="webmasters"/>
			</body>
		</html>
	</xsl:template>


<xsl:template match="webmasters">
	<table width="555" height="269" align="left" background="../imagenes/fondologo.jpg">
		<tr>
		<td height="39" colspan="3"> <h2>C S S </h2></td>
		</tr>
		<tr> 
    <td width="174" height="183"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="230" height="164">
        <param name="movie" value="../imagenes/oracle.swf">
        <param name="quality" value="high">
        <param name="wmode" value="transparent">
        <embed src="../imagenes/oracle.swf" width="230" height="164" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent"></embed></object></td>
    <td width="6"> </td>
		<td><xsl:apply-templates select="lenguaje[@nombre='C S S']"/>
		<xsl:value-of select ="contenido"/></td></tr>
	<tr> 
    <td height="36" colspan="2"></td>
    
    <td width="141"><div align="right"><a href="indice.htm">Ejercicios</a><br>
        <a href="../index3.htm" target="_parent">Menú Inicio</a></div></td>
  </tr>
	</table>
</xsl:template>



</xsl:stylesheet>