<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:strip-space elements="*"/>
<xsl:output method="xml" indent="yes" />

<xsl:template match="/">
	<xsl:apply-templates />
</xsl:template>

<xsl:template match="XMLBIBLE">
	<records>
	<xsl:apply-templates select="BIBLEBOOK"/>  
	</records>
</xsl:template>

<xsl:template match="BIBLEBOOK">
	<xsl:apply-templates select="CHAPTER"/>
</xsl:template>

<xsl:template match="CHAPTER">
	<xsl:apply-templates select="VERS"/>
</xsl:template>

<xsl:template match="VERS">
	<record>
	<book>		
		<xsl:value-of select="../../@bname"/>
  	</book>
  	<chapter>
  		<xsl:value-of select="../@cnumber"/>
  	</chapter>  	
  	<verse>
		<xsl:value-of select="@vnumber"/>
	</verse>
  	<text>
		<xsl:value-of select="."/>
	</text>
	</record>
</xsl:template>

</xsl:stylesheet>
