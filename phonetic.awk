BEGIN {
    print "export default {"
} 
$1 ~ /^[A-Z'][A-Z']*$/ {
    print "\"" $1 "\": \"" $2 "\","
}
END {
    print "};"
}