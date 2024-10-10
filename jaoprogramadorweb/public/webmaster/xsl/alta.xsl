<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:variable name="enlace" select="3"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>Trabajadores de AGMSOFT Consulting</title>
			</head>
			<body style="background:#576AAB;font-family:verdana;">
				<xsl:apply-templates select="personal"/>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match="personal">
		<table aling="center" border="0" style="color:#FFFFFF; font-size:12pt;">
			<tr>
				<td><b>Opciones</b></td>
			</tr>
		</table>	
		<br/>
		<xsl:apply-templates select="enlaces"/>	
		<xsl:apply-templates select="trabajadores"/>	
	</xsl:template>
	

	<xsl:template match="enlaces">
	<table aling="center" border="0" style="color:#FFFFFF; font-size:10pt;">
		<tr>
			<td>
					<xsl:for-each select="descripcion">
						<xsl:if test="position()=$enlace">
							<a style="text-decoration:none;color:ffffff;">
								<xsl:attribute name="href">
									<xsl:value-of select ="@enlace"/>
								</xsl:attribute>
								[ <b><xsl:value-of select ="."/></b> ]
							</a>
						</xsl:if>
							<xsl:if test="position()!=$enlace">
							<a style="text-decoration:none;color:ffffff;">
								<xsl:attribute name="href">
									<xsl:value-of select ="@enlace"/>
								</xsl:attribute>
								[ <xsl:value-of select ="."/> ]
							</a>
						</xsl:if>
				</xsl:for-each>
			</td>
		</tr>
	</table>
	<br/>	
	<xsl:apply-templates select="trabajadores"/>	
	</xsl:template>	
	
	<xsl:template match="trabajadores">
		<table bgcolor="#000000" aling="center" border="0" style="color:#000000; font-size:10pt;">
			<tr bgcolor="#ffff00">
				<td align="center">Nombre</td>
				<td align="center">Direccion</td>
				<td align="center">Poblacion</td>
				<td align="center">Edad</td>
				<td align="center">Trabajo</td>
				<td align="center">Estado</td>
				<td align="center">Sexo</td>
			</tr>	
			<br/>
			<xsl:apply-templates select="trabajador[@estado='Trabajando']"/>	
		</table>
	</xsl:template>
	
	<xsl:template match="trabajador">
		<tr style="color:#ffffff; font-size:10pt;">
			<td><xsl:value-of select ="nombre"/></td>
			<td><xsl:value-of select ="direccion"/></td>
			<td><xsl:value-of select ="poblacion"/></td>
			<td align="center"><xsl:value-of select ="edad"/></td>
			<td><xsl:apply-templates select="trabajo"/></td>
			<td align="center">
			<xsl:if test="@estado='Baja'">
				<font color='red'><xsl:value-of select ="@estado"/></font>
			</xsl:if>
			<xsl:if test="@estado!='Baja'">
				<font color='green'><xsl:value-of select ="@estado"/></font>
			</xsl:if>
			</td>
			<td><xsl:value-of select ="@sexo"/></td>
		</tr>
	</xsl:template>
	
	<xsl:template match="trabajo">
		<table aling="center" border="0" style="color:#FFFFFF; font-size:10pt;">
			<tr>
				<td><xsl:value-of select ="descripcion"/></td>
				<td>:<xsl:value-of select ="especialidad"/></td>
			</tr>
		</table>	
	</xsl:template>
	
</xsl:stylesheet>