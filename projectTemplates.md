/*<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Sign in
</Typography>
<form className={classes.form} noValidate>
<TextField variant="outlined"
margin="normal"
required
fullWidth
id="email"
label="Email Address"
name="email"
autoComplete="email"
value={email}
onChange={e=>setEmail(e.target.value)}
autoFocus
/>
<TextField variant="outlined"
margin="normal"
required
fullWidth
name="password"
label="Password"
type="password"
id="password"
autoComplete="current-password"
value={password}
onChange={e=>setPassword(e.target.value)}
/>
<FormControlLabel control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/>
<Grid item container style={{marginTop: '2em'}} alignItems="center">
<Button type="submit" fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleLogin}
                                >
                                Sign In
                                </Button>
                                <Grid item>
                                    <Button
                                        style={{fontWeight: 300}}
                                        color="primary"
                                        onClick={() => setOpen(false)}
                                    >
                                    Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {'Don't have an account? Sign Up'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>*/
